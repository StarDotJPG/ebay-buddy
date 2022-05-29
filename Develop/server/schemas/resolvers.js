const { AuthenticationError } = require('apollo-server-express');
const { User, Section, Item } = require('../models');
const { signToken } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User
          .findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('items');

        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
    sections: async (parent, args, context) => {
      if (context.user) {
        const user = await User
          .findById(context.user._id)
          .populate({
            populate: 'section'
          });

        return user.sections;
      }
      throw new AuthenticationError('Not logged in');
    },
    section: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User
          .findById(context.user._id)
          .populate({
            populate: 'section'
          });

        const section = await Section
          .findById(user.sections._id(_id))
          .populate({
            populate: 'item'
          });
        
        return section;
      }
      throw new AuthenticationError('Not logged in');
    },
    items: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          populate: 'item'
        });

        return user.items;
      }
      throw new AuthenticationError('Not logged in');
    },
    item: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          populate: 'item'
        });

        return user.items._id(_id);
      }
      throw new AuthenticationError('Not logged in');
    }
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addSection: async (parent, args, context) => {
      if (context.user) {
        const section = await Section.create({ ...args });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { sections: section } },
          { new: true }
        );

        return section;
      }
      throw new AuthenticationError('Not logged in');
    },
    editSection: async (parent, args, context) => {
      if (context.user) {
        return Section.findByIdAndUpdate(
          { _id: args._id },
          args,
          { new: true }
        );
      }
      throw new AuthenticationError('Not logged in');
    },
    deleteSection: async (parent, args, context) => {
      if (context.user) {
        return Section.deleteOne({ _id: args._id });
      }
      throw new AuthenticationError('Not logged in');
    },
    addItem: async (parent, args, context) => {
      if (context.user) {
        const item = await Item.create({ ...args});

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { items: item } },
          { new: true }
        );

        return item;
      }
      throw new AuthenticationError('Not logged in');
    },
    editItem: async (parent, args, context) => {
      if (context.user) {
        return Item.findByIdAndUpdate(
          { _id: args._id },
          args,
          { new: true }
        );
      }
      throw new AuthenticationError('Not logged in');
    },
    deleteItem: async (parent, args, context) => {
      if (context.user) {
        return Item.deleteOne({ _id: args._id });
      }
      throw new AuthenticationError('Not logged in');
    },
  }
};

module.exports = resolvers;