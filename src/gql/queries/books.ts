import { gql } from "@apollo/client";

export default gql`
  query GetBooks {
    books {
      title
      author
      thumbnail
      description
    }
  }
`;
