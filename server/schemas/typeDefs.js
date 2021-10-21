const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Query {
    me: User
    users: [User]
    user(username: String!): User  
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: String!
  }

  type Auth {
    token: ID
    user: User
  }
`;



module.exports = typeDefs; 