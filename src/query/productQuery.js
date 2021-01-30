import { gql } from '@apollo/client'

const FIND_ALL_PRODUCT = gql`
query findAllProducts {
  products {
    id
    OfficeId
    name
    price
    category
    stock
    picture
    Office {
      UserId
      id
      UserId
      address
      latitude
      longitude
      phoneNumber
      category
      User {
        id
        firstName
        lastName
        role
        email
      }
    }
  }
}
`;


const FIND_PRODUCT_BY_ID = gql`
query productById($id: ID!) {
  product(id: $id) {
    id
    OfficeId
    name
    price
    category
    stock
    picture
    Office {
      id
      UserId
      address
      latitude
      longitude
      phoneNumber
      category
      User {
        id
        firstName
        lastName
        role
        email
      }
    }
  }
}
`;

const CREATE_PRODUCT = gql`
mutation addProduct($inputProduct: ProductData) {
  addProduct(data: $inputProduct) {
    id
    OfficeId
    name
    price
    category
    stock
    picture
  }
}
`;

const EDIT_PRODUCT = gql`
mutation editProduct($inputId: ID!, $editData: ProductData) {
  editProduct(id: $inputId, data: $editData) {
    id
    OfficeId
    name
    price
    category
    stock
    picture
  }
}
`

const DELETE_PRODUCT = gql`
mutation deleteProduct($inputId: ID!) {
  deleteProduct(id: $inputId) {
    msg
  }
}
`
const product = {
  FIND_ALL_PRODUCT,
  FIND_PRODUCT_BY_ID,
  CREATE_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT
}

export default product