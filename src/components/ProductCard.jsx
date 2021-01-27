import React from 'react';
import { useMutation } from '@apollo/client';
import { cart } from '../query';
import { useLocation, useHistory, Link } from 'react-router-dom';

export default function ProductCard({ product }) {
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

  const handleAddCart = (e) => {
    console.log(e, 'dari add cart');
    e.preventDefault();
    e.stopPropagation();
    const newCart = {
      ProductId: +product.id,
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
        console.log(res);
        history.push('/keranjang');
      })
      .catch((err) => console.log(err));
  };

  const handleEditProduct = (e) => {
    e.preventDefault();
    e.stopPropagation();
    history.push(`/produk/${product.id}/edit`);
  };

  return (
    <Link
      to={`pasar/produk/${product.id}`}
      className="lg:w-1/4 md:w-1/2 p-4 w-full"
    >
      <div className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={product.picture}
        />
      </div>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {product.category.toUpperCase()}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {product.name}
        </h2>
        <p className="mt-1">
          Rp.
          {new Intl.NumberFormat({ style: 'currency' }).format(product.price)}
        </p>
        {location.pathname !== '/office' ? (
          <div className="flex flex-row gap-1 hover:text-black">
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
            <button onClick={handleAddCart}>Add To cart</button>
          </div>
        ) : (
          <div className="flex flex-row gap-1 hover:text-black">
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
            (<button onClick={handleEditProduct}>edit product</button>)
          </div>
        )}
      </div>
    </Link>
  );
}
