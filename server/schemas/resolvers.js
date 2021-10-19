// import { users } from "../models/User"

// const resolvers = db => ({
//     Query: {
//         user(parent, { id }, context){
//             if (!context.user) return null;
//             return users.find(user => user.id === id);
//         }
//     },
//     Mutation: {
//         createUser: async () => {
//             const user = await users.create();
//             return user;
//         }
//     }
// });


// module.exports = resolvers;

