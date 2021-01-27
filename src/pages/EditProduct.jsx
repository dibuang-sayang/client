import React, { useState, useEffect } from 'react'
import { product } from '../query'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'
import { useHistory } from 'react-router-dom'
import { Error404, Loader } from '../components'


export default function EditProduct() {
  const history = useHistory()
  const { id } = useParams()
  const [localData, setLocalData] = useState({
    // id: 0,
    OfficeId: 0,
    name: "",
    price: 0,
    category: "",
    stock: 0,
    picture: ""
  })

  const {data: productData, error, loading } = useQuery(product.FIND_PRODUCT_BY_ID,{
    errorPolicy: 'all',
    variables: {
      id
    },
    context: {
      headers: {
        token: localStorage.getItem('token'),
      },
    },
  })

  const [EDIT_PRODUCT] = useMutation(product.EDIT_PRODUCT, {
    context : {
      headers : {
        token : localStorage.getItem("token")
      }
    },
    errorPolicy : "all",
    onCompleted: () => {
      history.push('/office')
    }
  })

  useEffect(() => {
    if(productData){
      setLocalData({
        // id: productData.product.id,
        OfficeId: productData.product.OfficeId,
        name: productData.product.name,
        price: productData.product.price,
        category: productData.product.category,
        stock: productData.product.stock,
        picture: productData.product.picture
      })
    }
  }, [productData])

  const onSubmitHandler = (e) => {
    e.preventDefault()
    EDIT_PRODUCT({
      variables: {
        id,
        editData: localData
      }
    })
  }

  const onChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name

    setLocalData({
      ...localData,
      [name]: value
    })
  }

  if(loading){
    return <Loader />
  }
  if (error) return <Error404 />
  return (
    <div>
      <div className="mt-20">{id}</div>
      <div>{JSON.stringify(productData)}</div>
      <div className="flex justify-center">
        <form onSubmit={(e) => onSubmitHandler(e)} className="flex flex-col">
          <label htmlFor="">name </label>
          <input type="text" name="name" value={localData.name} onChange={onChangeHandler}/>
          <label htmlFor="">price </label>
          <input type="number" min="0" name="price" value={localData.price} onChange={onChangeHandler}/>
          <label htmlFor="">category </label>
          <input type="text" name="category" value={localData.category} onChange={onChangeHandler}/>
          <label htmlFor="">stock </label>
          <input type="number" min="0" name="stock" value={localData.stock} onChange={onChangeHandler}/>
          <label htmlFor="">picture </label>
          <input type="text" min="0" name="picture" value={localData.picture} onChange={onChangeHandler}/>
          <input type="submit" value="edit"/>
        </form>
      </div>
    </div>
  )
}
