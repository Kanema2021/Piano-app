const { gql } = require("apollo-server");

const typeDefs = gql   `
    type User {
        id: ID!
        name: String!
    }
`;

module.exports = typeDefs;