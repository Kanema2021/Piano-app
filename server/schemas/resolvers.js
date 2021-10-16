const { User } = require('../models/Piano');

const resolvers = db => ({
    Query: {
        username: async () => {
            return User.find();
        }
    },
    Mutation: {
        createUser: async () => {
            const user = await User.create();
            return user;
        }
    }
});


module.exports = resolvers;