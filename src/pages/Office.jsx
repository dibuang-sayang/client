import React, { useState, useEffect} from 'react'
import { useQuery } from '@apollo/client'
import { office as OfficeQuery, user } from '../query'
import { ProductCard } from '../components'
import { useHistory } from 'react-router-dom'

export default function Office() {

  const history = useHistory()
  const { data, error, loading } = useQuery(OfficeQuery.GET_OFFICE_BY_ID, {
    errorPolicy: 'all',
    context: {
      headers: {
        token: localStorage.getItem('token'),
      },
    },
  })

  const {data: currentUser, loading: loadingCurrentUser} = useQuery(user.GET_CURRENT_USER)

  const goToAddProduct = () => {
    history.push('/pasar/produk/add')
  }


  if(loading || loadingCurrentUser){
    return <div>loadng...</div>
  }
  return (
    <div className="mt-20">
      {/* {data && JSON.stringify(data, null, 2)} */}
      {/* {JSON.stringify(currentUser)} */}
      <div className="flex flex-col justify-center my-20">
        <div className="flex row">
          Toko {currentUser.getCurrentUser.firstName}
          <button className="bg-green-400 py-2 px-4 rounded" onClick={goToAddProduct}> tambah kan produk baru ? </button>
        </div>
        <div className="flex row">
          {data.office.Products.map(Product => {
            return <ProductCard key={Product.id} product={Product}/>
          })}
        </div>
      </div>
    </div>
  )
}
