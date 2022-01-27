import { gql } from '@apollo/client';

export const GET_ME = gql `
  query Me {
    me {
      _id
      username
      bookCount
      email
      savedBooks {
        _id
        bookId
        title
        descriptions
        authors
        image
        link
      }
    }
  }
`;