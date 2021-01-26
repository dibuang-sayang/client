import React from "react"
import { useMutation } from "@apollo/client"
import { cart } from "../query"

export default function ProductCard({product}) {

    const [addCart] = useMutation(cart.ADD_CART , {
      context : {
        headers : {
          token : localStorage.getItem("token")
        }
      },
      errorPolicy : "all"
    })

    const handleAddCart = (produtId) => {
      console.log(produtId);
      const newCart = {
        ProductId : +produtId,
        quantity : 1,
        status : "belum lunas"
      }
      console.log(newCart);
      addCart({
        variables : {
          inputCart : newCart
        }
      }).then (res =>  console.log(res))
        .catch(err => console.log(err))
    }
    return (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
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
                <p className="mt-1">Rp.{new Intl.NumberFormat({style :'currency'}).format(product.price)}</p>
                <button
                onClick = {() => {handleAddCart(product.id)}}
                >Add To cart</button>
              </div>

            </div>
    )
}
