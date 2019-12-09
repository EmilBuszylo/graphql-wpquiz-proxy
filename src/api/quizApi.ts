const { RESTDataSource } = require('apollo-datasource-rest');

export class QuizApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://quiz.o2.pl/api/v1/';
  }

  allQuizzes: (
    params: QuizListingProps
  ) => Promise<any[] | undefined> = async ({ offset, limit }) => {
    try {
      const result = await this.get(`quizzes/${offset}/${limit}`);
      const quizzesElements = result.items;
      return Array.isArray(quizzesElements) ? quizzesElements : [];
    } catch (error) {
      console.error(error);
    }
  };

  quizzesByTypeOrCategory: (
    params: QuizListingProps
  ) => Promise<any[] | undefined> = async ({
    offset,
    limit,
    category,
    type,
    productId,
  }) => {
    try {
      const result = await this.get(
        `quizzes_ctn/${offset}/${limit}/${category}/${type}/${productId}`
      );
      const quizzesElements = result.items;
      return Array.isArray(quizzesElements) ? quizzesElements : [];
    } catch (error) {
      console.error(error);
    }
  };

  popular: (params: QuizListingProps) => Promise<any[] | undefined> = async ({
    offset,
    limit,
  }) => {
    try {
      const result = await this.get(`popular/${offset}/${limit}`);
      const quizzesElements = result.items;
      return Array.isArray(quizzesElements) ? quizzesElements : [];
    } catch (error) {
      console.error(error);
    }
  };

  newest: (params: QuizListingProps) => Promise<any[] | undefined> = async ({
    offset,
    limit,
  }) => {
    try {
      const result = await this.get(`current/${offset}/${limit}`);
      const quizzesElements = result.items;
      return Array.isArray(quizzesElements) ? quizzesElements : [];
    } catch (error) {
      console.error(error);
    }
  };
}
