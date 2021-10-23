const express = require("express");
const path = require("path");
const db = require("./config/connection");
const { authMiddleWare } = require("./utils/auth");
const { typeDefs, resolvers } = require("./schemas");
const { ApolloServer } = require("apollo-server-express");
const expressJwt = require("express-jwt");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  expressJwt({
    secret: "SUPER_SECRET",
    algorithms: [""],
    credentialsRequired: false,
  })
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleWare,
  formatError: (err) => {
    console.error("error in appolo: ", err);
    return err;
  },
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (req, res) => {
  console.log('sending react')
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

db.once("open", async () => {
  // await server.);
  app.listen(PORT, async () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
