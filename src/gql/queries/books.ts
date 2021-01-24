import { gql } from "@apollo/client";

export default gql`
  query GetBooks {
    books {
      id
      title
      author
      thumbnail
      description
      price
      inStock
    }
  }
`;
