import { users } from "./User"

const resolvers = db => ({
    Query: {
        user(parent, { id }){
            return users.find(user => user.id === id);
        }
    },
});


module.exports = resolvers;