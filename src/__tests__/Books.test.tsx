// eslint-disable-next-line
import "@testing-library/jest-dom/extend-expect";
import { render, act } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { books } from "../gql/queries";
import { GetBooksQuery } from "../gql/types";
import Books from "../Books";

test("title is properly displayed", async () => {
  const mockBooksResponse: GetBooksQuery = {
    books: [
      {
        id: "fk903",
        title: "Mock title",
        inStock: false,
        author: "Glennon Doyle",
        description: "Mock description",
        thumbnail: "https://thumbnail.com",
      },
    ],
  };

  const apolloMocks = [
    {
      request: {
        query: books,
      },
      result: () => {
        return {
          data: mockBooksResponse,
        };
      },
    },
  ];

  const { getByText } = render(
    <MockedProvider addTypename={false} mocks={apolloMocks}>
      <Books />
    </MockedProvider>
  );

  // wait for component to render
  await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

  expect(getByText("Mock title")).toBeInTheDocument();
});
