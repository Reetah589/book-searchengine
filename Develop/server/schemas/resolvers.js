const resolvers = {
    Query: {
      me: () => {
        return 'user type';
      }
    }
  };

  //defining the query and mutations with Mongoose models
  
  module.exports = resolvers;