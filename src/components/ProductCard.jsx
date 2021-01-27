import React from 'react';
import { useMutation } from '@apollo/client';
import { cart, product } from '../query';
import { useLocation, useHistory, Link } from 'react-router-dom';
import Swal from "sweetalert2"

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})


export default function ProductCard({ product:productData }) {
  const location = useLocation();
  const history = useHistory();
  const [addCart] = useMutation(cart.ADD_CART, {
    context: {
      headers: {
        token: localStorage.getItem('token'),
      },
    },
    errorPolicy: 'all',
  });
  const [deleteProduct] = useMutation(product.DELETE_PRODUCT, {
    context : {
      headers : {
        token : localStorage.getItem("token")
      }
    },
    errorPolicy : "all"
  })

  const handleAddCart = (e) => {
    console.log(e, 'dari add cart');
    e.preventDefault();
    e.stopPropagation();
    const newCart = {
      ProductId: +productData.id,
      quantity: 1,
      status: 'belum lunas',
    };
    console.log(newCart);
    addCart({
      variables: {
        inputCart: newCart,
      },
    })
      .then((res) => {
        if(res.data.addCart) {
          console.log("sukses");
          Toast.fire({
            icon : 'success',
            title : 'berhasil ditambahkan ke keranjang'
          })
          // history.push('/keranjang');
        }else {
          Toast.fire({
            icon : "error",
            title: res.errors[0].message
          })
          // console.log(res.errors[0].message);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleEditProduct = (e) => {
    console.log("edit");
    e.preventDefault();
    e.stopPropagation();
    history.push(`office/produk/${productData.id}/edit`);
  };

  const handleDeleteProduct = (e) => {
    console.log("mencobe delete", productData.id);
    deleteProduct({
      variables : {
        inputId : productData.id
      } 
    })
  }

  return (
    <Link
      to={`pasar/produk/${productData.id}`}
      className="lg:w-1/4 md:w-1/2 p-4 w-full"
    >
      <div className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={productData.picture}
        />
      </div>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {productData.category.toUpperCase()}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {productData.name}
        </h2>
        <p className="mt-1">
          Rp.
          {new Intl.NumberFormat({ style: 'currency' }).format(productData.price)}
        </p>
        {location.pathname !== '/office' ? (
          <div 
          onClick={handleAddCart}
          className="flex flex-row gap-1 hover:text-black">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <button >Add To cart</button>
          </div>
        ) : (
          <div className="">
            <div 
            onClick={handleEditProduct}
            className="flex flex-row gap-1 hover:text-black">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              (<button>edit product</button>)
            </div>
            <div 
            onClick = {handleDeleteProduct}
            className="delete-button">
              <button>delete</button>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
