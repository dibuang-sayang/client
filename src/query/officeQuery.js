import { gql } from '@apollo/client'

const ADD_OFFICE = gql`
  mutation addOffice($inputOffice: OfficeData){
    addOffice(data: $inputOffice){
      address
      latitude
      longitude
      phoneNumber
      category
    }
  }
`
const GET_ALL_OFFICE = gql`
    query findAllOffice {
        offices {
            id
            UserId
            address
            latitude
            longitude
            phoneNumber
            category
            User {
                firstName
                lastName
                email
                password
                role
            }
        }
    }
`

const GET_OFFICE_BY_ID = gql`
    query findOfficeById {
        office {
            id
            UserId
            address
            latitude
            longitude
            phoneNumber
            category
            User {
                firstName
                lastName
                email
                password
                role
            }
        }
    }
`

const EDIT_OFFICE = gql`
    mutation editOffice($data : OfficeData ) {
        editOffice(data : $data) {
            id
            UserId
            address
            latitude
            longitude
            phoneNumber
            category
            User {
                firstName
                lastName
                email
                password
                role
            }
        }
    }
`
const DELETE_OFFICE = gql`
    mutation deleteOffice {
        deleteOffice{
            msg
        }
    }
`

const office = {
  ADD_OFFICE,
  GET_ALL_OFFICE,
  GET_OFFICE_BY_ID,
  EDIT_OFFICE,
  DELETE_OFFICE
}

export default office