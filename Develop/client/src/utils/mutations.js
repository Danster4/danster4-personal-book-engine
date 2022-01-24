import { gql } from '@apollo/client';

export const LOGIN_USER = gql `
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql `
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql `
  mutation saveBook($bookId: String!, $title: String!, $description: String!, $authors: [String], $image: String, $link: String) {
    saveBook(bookId: $bookId, title: $title, description: $description, authors: $authors, image: $image, link: $link) {
      token
      user {
        _id
        username
      }
      book {
        bookId
        title
        description
        authors
        image
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql `
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      token
      user {
        _id
        username
      }
      book {
        bookId
      }
    }
  }
`;