import { gql } from '@apollo/client'

const ADD_CART = gql`
mutation addCart($inputCart: CartData){
  addCart(data: $inputCart){
    id
    UserId
    ProductId
    quantity
    status
  }
}
`

const FIND_CART_BY_ID = gql`
query cart($id: ID!){
  cart(id:$id){
    id
    UserId
    ProductId
    quantity
    status
  }
}
`

const FIND_ALL_CART = gql`
query carts{
  carts{
    UserId
    ProductId
    quantity
    status
  }
}
`

const EDIT_CART = gql`
mutation editCart($id: ID!  $dataEditCart: CartData){
  editCart(id: $id  data: $dataEditCart){
    UserId
    ProductId
    quantity
    status
  }
}
`

const CHECKOUT = gql`
query checkOut {
  checkOut { msg }
}
`
const DELETE_CART = gql`
mutation deleteCart($id: ID!){
  deleteCart(id: $id){
    msg
  }
}
`

const cart = {
  FIND_ALL_CART,
  FIND_CART_BY_ID,
  ADD_CART,
  EDIT_CART,
  DELETE_CART,
  CHECKOUT
}

export default cart