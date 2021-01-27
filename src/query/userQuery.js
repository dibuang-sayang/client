import { gql } from '@apollo/client';

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
      Office {
        address
        latitude
        longitude
        phoneNumber
        category
      }
    }
  }
`;

const GET_CURRENT_USER = gql`
  query getCurrentUser {
    getCurrentUser @client
  }
`;

const GET_USER_POSITION = gql`
  query getUserPosition {
    getUserPosition @client
  }
`

const FIND_ALL_USER = gql`
  query findAllUser {
    users {
      firstName
      lastName
      email
    }
  }
`;

const EDIT_USER = gql`
  mutation editUser($inputUser: UserData) {
    editUser(data: $inputUser) {
      id
      firstName
      lastName
      email
      role
    }
  }
`;

const DELETE_USER = gql`
  mutation deleteUser {
    deleteUser {
      msg
    }
  }
`;

const user = {
  REGISTER_USER,
  LOGIN_USER,
  FIND_USER_BY_ID,
  GET_CURRENT_USER,
  FIND_ALL_USER,
  EDIT_USER,
  DELETE_USER,
  GET_USER_POSITION
};

export default user;
