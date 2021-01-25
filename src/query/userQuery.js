import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
  mutation loginUser($email: String, $password: String) {
    loginUser(email: $email, password: $password) {
      token
    }
  }
`;

export const REGISTER_USER = gql`
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