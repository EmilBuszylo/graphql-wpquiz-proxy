import { ApolloServer } from 'apollo-server';

import { typeDefs } from './quizSchema';
import { resolvers } from './resolvers';
import { QuizApi } from './api/quizApi';

(async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // ToDO check and correct this type
    dataSources(): any {
      return { quizApi: new QuizApi() };
    },
  });

  const PORT = process.env.PORT || 4000;

  const { url } = await server.listen(`${PORT}`);
  console.log(`Server is running on ${url}`);
})();
