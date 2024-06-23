const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const userSchema = require('./schemas/userSchema');
const userResolver = require('./resolvers/userResolver');
const connectDB = require('./config/db');
const auth = require('./middleware/auth');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const startServer = async () => {
  const app = express();
  connectDB();

  app.use(cors());
  app.use(bodyParser.json());

  const schema = makeExecutableSchema({
    typeDefs: userSchema,
    resolvers: userResolver,
  });

  const server = new ApolloServer({ schema });

  await server.start();

  app.use('/graphql', auth, expressMiddleware(server, {
    context: ({ req }) => ({ req }),
  }));

  return app;
};

module.exports = startServer;
