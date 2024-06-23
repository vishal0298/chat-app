const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const bcrypt = require('bcryptjs');

const userResolver = {
  Query: {
    me: async (parent, args, { req }) => {
      if (!req.user) throw new Error('Not authenticated');
      return req.user;
    },
  },
  Mutation: {
    register: async (parent, { name, email, password }) => {
      const userExists = await User.findOne({ email });

      if (userExists) {
        throw new Error('User already exists');
      }

      const user = await User.create({
        name,
        email,
        password,
      });

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user.id),
      };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (user && (await user.matchPassword(password))) {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          token: generateToken(user.id),
        };
      } else {
        throw new Error('Invalid email or password');
      }
    },
  },
};

module.exports = userResolver;
