const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    itemCount: Int
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
    login(username: String!, password: String!): Auth
    addUser(username: String!, password: String!): Auth
    addItem(): Item
    editItem(itemId: ID!, ): Item
    deleteItem(itemId: ID!): Item
  }
`;

module.exports = typeDefs;
