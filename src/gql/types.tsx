import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  books: Array<Book>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBookToCart: Book;
};


export type MutationAddBookToCartArgs = {
  bookId: Scalars['String'];
};

export type Book = {
  __typename?: 'Book';
  id: Scalars['String'];
  inStock: Scalars['Boolean'];
  title: Scalars['String'];
  author: Scalars['String'];
  thumbnail: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['String'];
};

export type PriceMetadata = {
  __typename?: 'PriceMetadata';
  currency: Currency;
  price: Scalars['String'];
  salePrice?: Maybe<Scalars['String']>;
  inStock: Scalars['Boolean'];
};

export enum Currency {
  Usd = 'USD',
  Gbp = 'GBP',
  Eur = 'EUR'
}

export type GetBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBooksQuery = (
  { __typename?: 'Query' }
  & { books: Array<(
    { __typename?: 'Book' }
    & Pick<Book, 'id' | 'title' | 'author' | 'thumbnail' | 'description' | 'price' | 'inStock'>
  )> }
);


export const GetBooksDocument = gql`
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

/**
 * __useGetBooksQuery__
 *
 * To run a query within a React component, call `useGetBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBooksQuery(baseOptions?: Apollo.QueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
        return Apollo.useQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, baseOptions);
      }
export function useGetBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
          return Apollo.useLazyQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, baseOptions);
        }
export type GetBooksQueryHookResult = ReturnType<typeof useGetBooksQuery>;
export type GetBooksLazyQueryHookResult = ReturnType<typeof useGetBooksLazyQuery>;
export type GetBooksQueryResult = Apollo.QueryResult<GetBooksQuery, GetBooksQueryVariables>;