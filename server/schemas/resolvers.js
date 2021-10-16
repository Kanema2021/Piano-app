const { User } = require('../models/Piano');

const resolvers = db => ({
    Query: {
        user: async (parent, {id}, context) => {
                // return User.find();
            if (!context.user) return null;
            return User.find(user => user.id === id)
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