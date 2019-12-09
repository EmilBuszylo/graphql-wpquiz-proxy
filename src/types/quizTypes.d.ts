type QuizListingProps = {
  offset: number;
  limit: number;
  category?: number;
  type?: QuizTypes;
  productId?: string;
};

type QuizTypes = 'KNOWLEDGE' | 'PSYCHOTEST' | 'HOT_OR_NOT';
