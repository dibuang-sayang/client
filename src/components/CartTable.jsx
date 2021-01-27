import { useQuery, useMutation } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { cart } from '../query';
// import { checkOutVar } from "../cache"

export default function CartTable({ cart: cartData, refetch }) {
  const [qty, setQty] = useState(cartData.quantity);
  const [editCart] = useMutation(cart.EDIT_CART, {
    context: {
      headers: {
        token: localStorage.getItem('token'),
      },
    },
    errorPolicy: 'all',
  });
  const [deleteCart] = useMutation(cart.DELETE_CART, {
    context: {
      headers: {
        token: localStorage.getItem('token'),
      },
    },
  });

  const handleChangeQty = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    setQty(value);
    const { ProductId, status } = cartData;
    const updateCartData = {
      ProductId,
      status,
      quantity: +value,
    };
    editCart({
      variables: {
        id: cartData.id,
        dataEditCart: updateCartData,
      },
    })
      .then((res) => {
        refetch();
      })
      .catch((err) => console.log(err));
  };

  const handleClickDeleteCart = (cartId) => {
    deleteCart({
      variables: {
        id: cartId,
      },
    }).then((res) => {
      console.log(res);
      refetch();
    });
  };

  return (
    <tbody>
      <tr>
        <td className="hidden pb-4 md:table-cell">
          <div>
            <img
              src={cartData.Product.picture}
              className="w-20 rounded"
              alt="Thumbnail"
            />
          </div>
        </td>
        <td>
          <div>
            <p className="mb-2 md:ml-4">{cartData.Product.name}</p>
            <form action="" method="POST">
              <button type="submit" className="text-gray-700 md:ml-4">
                <small>(Remove item)</small>
              </button>
            </form>
          </div>
        </td>
        <td className="justify-center md:justify-end md:flex mt-6">
          <div className="w-20 h-10">
            <div className="relative flex flex-row w-full h-8">
              <input
                onChange={(e) => handleChangeQty(e)}
                type="number"
                min={0}
                max={cartData.Product.stock || 1000}
                value={qty}
                className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
              />
            </div>
          </div>
        </td>
        <td className="hidden text-right md:table-cell">
          <span className="text-sm lg:text-base font-medium">
            Rp.
            {new Intl.NumberFormat({ style: ' currency' }).format(
              cartData.Product.price
            )}
          </span>
        </td>
        <td className="text-right">
          <span className="text-sm lg:text-base font-medium">
            Rp.
            {new Intl.NumberFormat({ style: 'cuurency' }).format(
              cartData.Product.price * qty
            )}
          </span>
        </td>

        <td className="text-center">
          <span className="text-sm lg:text-base font-medium">
            <a href="#" onClick={() => handleClickDeleteCart(cartData.id)}>
              Delete
            </a>
          </span>
        </td>
      </tr>
    </tbody>
  );
}
