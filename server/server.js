const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const { ApolloServer } = require('apollo-server-express');
const expressJwt = require('express-jwt');


const app = express();
const PORT = process.env.PORT || 3001;

const { typeDefs, resolvers } = require('./schemas');

app.use(
  expressJwt ({
    secret: "SUPER_SECRET",
    algorithms: [""],
    credentialsRequired: false,
  })
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || ' ';
    // const user = getUser(token);
    // get user not defined yet...trying to figure out where to do so.
    // return { user };
    // add endpoints
  }
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  
  app.use(routes);
  
  db.once('open', () => {
    app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});