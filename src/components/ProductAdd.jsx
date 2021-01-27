import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { product } from '../query';
import { useHistory } from 'react-router-dom';

export default function ProductAdd() {
  const [productInput, setProductInput] = useState({
    name: '',
    price: 0,
    category: '',
    stock: 0,
    picture: '',
  });
  const [createProduct] = useMutation(product.CREATE_PRODUCT, {
    context: {
      headers: {
        token: localStorage.getItem('token'),
      },
    },
    errorPolicy: 'all',
  });
  const history = useHistory();

  const changeInputHandler = (e) => {
    let value = e.target.value;
    const name = e.target.name;
    if (name === 'stock' || name === 'price') {
      value = Number(value);
    }
    setProductInput({
      ...productInput,
      [name]: value,
    });
  };

  const handleSubmitProduct = () => {
    createProduct({
      variables: {
        inputProduct: productInput,
      },
    }).then((res) => {
      history.push('/pasar');
    });
  };

  return (
    <div className="w-full h-screen flex justify-center">
      <div className="bg-white flex flex-col justify-center items-center w-3/4">
        <div className="w-3/4 text-left">
          <h1 class="text-3xl font-bold text-orange-500 mb-2 font-custom">
            Tambah Produk
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
              onChange={changeInputHandler}
              value={productInput.name}
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
              onChange={changeInputHandler}
              value={productInput.price}
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
              onChange={changeInputHandler}
              value={productInput.category}
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
              value={productInput.stock}
              onChange={changeInputHandler}
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
              onChange={changeInputHandler}
              value={productInput.picture}
              placeholder="Gambar"
              autocomplete="off"
              class="w-3/4 mt-2 bg-white text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:border-green-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="w-full flex justify-between mt-3">
            <div className="flex flex-col justify-center">
              <button className="bg-gray-100 hover:bg-gray-900 hover:text-white px-3 py-2">
                Upload Produk
              </button>
            </div>
            <img
              src="https://dummyimage.com/400x400/059668/e0cce0.jpg&text=Upload+Image"
              alt=""
            ></img>
          </div>
          <div className="mt-8 flex justify-center">
            <button
              class="bg-green-600 w-1/2 py-2 font-custom hover:bg-green-800 text-white px-3  rounded text-lg focus:outline-none shadow"
              onClick={handleSubmitProduct}
            >
              Tambah Produk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
