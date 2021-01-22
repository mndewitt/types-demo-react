import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/client";
import { Card, Button } from "react-bootstrap";
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

  const renderBooks = () =>
    data.books.map((book) => {
      return (
        <div className="col-3">
          <Card className="w-100">
            <Card.Body>
              <Card.Img variant="top" src={book.thumbnail} />
              <Card.Title className="mt-2">{book.title}</Card.Title>
              <Card.Text>{book.description}</Card.Text>
              <Button variant="primary">Buy now</Button>
            </Card.Body>
          </Card>
        </div>
      );
    });

  return (
    <div className="container mt-3">
      <h1 className="mb-3">Bestsellers</h1>
      <div className="row">{renderBooks()}</div>
    </div>
  );
};

export default Books;
