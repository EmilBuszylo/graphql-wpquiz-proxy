import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Quiz {
    buttonStart: String
    shareTitle: String
    questions: Int!
    createdAt: String!
    sponsored: Boolean!
    categories: [QuizCategories]
    id: Float
    title: String!
    type: String!
    content: String!
    mainPhoto: QuizMainPhoto!
    tags: [QuizTag]
    category: QuizCategory
  }
  type QuizTag {
    uid: Float!
    name: String
    type: String
    primary: String
  }
  type QuizCategories {
    uid: Float!
    secondaryCid: String
    name: String
    type: String
  }
  type QuizCategory {
    id: Float!
    name: String!
  }
  type QuizMainPhoto {
    author: String
    width: Int!
    source: String
    title: String
    url: String!
    height: Int!
  }
  type Query {
    all(offset: Int!, limit: Int!): [Quiz!]!
    popular(offset: Int!, limit: Int!): [Quiz!]!
    newest(offset: Int!, limit: Int!): [Quiz!]!
    quizzesByTypeOrCategory(
      offset: Int!
      limit: Int!
      type: String
      productId: String
    ): [Quiz!]!
  }
`;
