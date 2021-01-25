import { gql } from '@apollo/client'

const LOGIN_USER = gql`
  mutation loginUser($email: String, $password: String) {
    loginUser(email: $email, password: $password) {
      token
    }
  }
`;

const REGISTER_USER = gql`
mutation register($inputUser: UserData) {
  register(data: $inputUser) {
    firstName
    lastName
    email
    password
    role
  }
}
`;

const FIND_USER_BY_ID = gql`
  query findById {
    user {
      id
      firstName
      lastName
      email
      role
    }
  }
`;

const GET_CURRENT_USER = gql`
  query getCurrentUser {
    getCurrentUser @client
  }
`

const user = {REGISTER_USER, LOGIN_USER, FIND_USER_BY_ID, GET_CURRENT_USER}
export default user