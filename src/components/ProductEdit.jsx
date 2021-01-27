import React, { useState, useEffect } from 'react';
import { office, product } from '../query';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

export default function ProductEdit() {
  const history = useHistory();
  const { id } = useParams();
  const [localData, setLocalData] = useState({
    // id: 0,
    OfficeId: 0,
    name: '',
    price: 0,
    category: '',
    stock: 0,
    picture:
      'https://dummyimage.com/400x400/059668/e0cce0.jpg&text=Upload+Image',
  });

  const { data: productData, error, loading } = useQuery(
    product.FIND_PRODUCT_BY_ID,
    {
      errorPolicy: 'all',
      variables: {
        id,
      },
      context: {
        headers: {
          token: localStorage.getItem('token'),
        },
      },
    }
  );

  const [EDIT_PRODUCT] = useMutation(product.EDIT_PRODUCT, {
    context: {
      headers: {
        token: localStorage.getItem('token'),
      },
    },
    errorPolicy: 'all',
    onCompleted: () => {
      history.push('/office');
    },
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(localData);
    EDIT_PRODUCT({
      variables: {
        id,
        editData: localData,
      },
    });
  };

  const onChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setLocalData({
      ...localData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (productData) {
      setLocalData({
        // id: productData.product.id,
        OfficeId: productData.product.OfficeId,
        name: productData.product.name,
        price: productData.product.price,
        category: productData.product.category,
        stock: productData.product.stock,
        picture: productData.product.picture,
      });
    }
  }, [productData]);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div className="w-full h-screen flex justify-center">
      <div className="bg-white flex flex-col justify-center items-center w-3/4">
        <div className="w-3/4 text-left">
          <h1 class="text-3xl font-bold text-orange-500 mb-2 font-custom">
            Update {productData?.product.name} Data
          </h1>
        </div>
        <div class="w-3/4 text-center">
          <div className="flex flex-row w-full justify-between">
            <div className="w-1/4 text-left mt-2 flex items-center">
              <label htmlFor="name">Nama Produk</label>
            </div>
            <input
              type="email"
              name="name"
              onChange={onChangeHandler}
              value={localData.name}
              placeholder="Nama Produk"
              autocomplete="off"
              class="w-3/4 mt-2 bg-white text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:border-green-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="flex flex-row w-full justify-between">
            <div className="w-1/4 text-left mt-2 flex items-center">
              <label htmlFor="price">Harga</label>
            </div>
            <input
              type="number"
              name="price"
              onChange={onChangeHandler}
              value={localData.price}
              placeholder="Harga"
              autocomplete="off"
              class="w-3/4 mt-2 bg-white text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:border-green-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="flex flex-row w-full justify-between">
            <div className="w-1/4 text-left mt-2 flex items-center">
              <label htmlFor="category">Kategori</label>
            </div>
            <input
              type="text"
              name="category"
              onChange={onChangeHandler}
              value={localData.category}
              placeholder="Kategori"
              autocomplete="off"
              class="w-3/4 mt-2 bg-white text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:border-green-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="flex flex-row w-full justify-between">
            <div className="w-1/4 text-left mt-2 flex items-center">
              <label htmlFor="stock">Stok</label>
            </div>
            <input
              type="number"
              name="stock"
              value={localData.stock}
              onChange={onChangeHandler}
              placeholder="Stok"
              autocomplete="off"
              class="w-3/4 mt-2 bg-white text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:border-green-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="flex flex-row w-full justify-between">
            <div className="w-1/4 text-left mt-2 flex items-center">
              <label htmlFor="picture">Gambar</label>
            </div>
            <input
              type="text"
              name="picture"
              onChange={onChangeHandler}
              value={localData.picture}
              placeholder="Gambar"
              autocomplete="off"
              class="w-3/4 mt-2 bg-white text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:border-green-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="w-full flex justify-between mt-3">
            <div className="flex flex-col justify-center">
              <button className="bg-gray-100 hover:bg-gray-900 hover:text-white px-3 py-2">
                Update Foto
              </button>
            </div>
            <div className="w-96 h-96 overflow-hidden">
              <img
                src={localData.picture}
                alt=""
                className="h-full w-full object-cover object-center "
              ></img>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <button
              class="bg-green-600 w-1/2 py-2 font-custom hover:bg-green-800 text-white px-3  rounded text-lg focus:outline-none shadow"
              onClick={(e) => onSubmitHandler(e)}
            >
              Update Produk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
