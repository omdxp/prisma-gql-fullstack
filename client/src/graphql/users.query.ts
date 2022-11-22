import { gql } from "urql";

export const GetUsers = gql`
  {
    users {
      id
      name
      notes {
        id
        message
        createdAt
        updatedAt
      }
    }
  }
`;
