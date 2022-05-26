const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    itemCount: Int
  }

  input ItemInput {
    description: String
    weight: Float
    size: String
  }

  type Item {
    _id: ID
    name: String
    description: String
    createdAt: String
    weight: Float
    size: String
    section: Section
  }

  type Section {
    _id: ID
    name: String
    full: Boolean
    items: [Item]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    items(section: String): [Item]
    items(name: String): [Item]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!): Auth
    addItem(name: String!, section: String!, input: ItemInput): Item
    editItem(itemId: ID!, name: String!, section: String, input: ItemInput): Item
    deleteItem(itemId: ID!): Item
  }
`;

module.exports = typeDefs;
