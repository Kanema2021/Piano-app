const { gql } = require("apollo-server");

const typeDefs = gql   `
    type User {
        id: ID!
        name: String
    }

    type Query {
        user(id: ID!): User
    }
`;

module.exports = typeDefs;