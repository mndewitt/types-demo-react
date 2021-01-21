import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/client";
import { books } from "./gql/queries";
import { GetBooksQuery, GetBooksQueryVariables } from "./gql/types";

const Books: FunctionComponent<{}> = () => {
  const { loading, error, data } = useQuery<
    GetBooksQuery,
    GetBooksQueryVariables
  >(books);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (!data) {
    return null;
  }

  const booksEls = data.books.map((book) => {
    return <div>{book.title}</div>;
  });

  return <div>{booksEls}</div>;
};

export default Books;
