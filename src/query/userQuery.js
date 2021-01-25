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

const user = {REGISTER_USER, LOGIN_USER}
export default user