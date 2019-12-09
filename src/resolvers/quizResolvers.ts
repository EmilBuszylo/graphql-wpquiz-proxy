export const quizResolvers = {
  Query: {
    all: async (
      _source: any,
      { offset = 0, limit = 9 }: QuizListingProps,
      { dataSources }: any
    ) => {
      return dataSources.quizApi.allQuizzes({ offset, limit });
    },
    quizzesByTypeOrCategory: async (
      _source: any,
      { offset, limit, type, productId }: QuizListingProps,
      { dataSources }: any
    ) =>
      dataSources.quizApi.quizzesByTypeOrCategory({
        offset,
        limit,
        type,
        productId,
      }),
    popular: async (
      _source: any,
      { offset, limit }: QuizListingProps,
      { dataSources }: any
    ) => dataSources.quizApi.popular({ offset, limit }),
    newest: async (
      _source: any,
      { offset, limit }: QuizListingProps,
      { dataSources }: any
    ) => dataSources.quizApi.newest({ offset, limit }),
  },
};
