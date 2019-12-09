import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

export type Query = {
  __typename?: 'Query';
  all: Array<Quiz>;
  popular: Array<Quiz>;
  newest: Array<Quiz>;
  quizzesByType: Array<Quiz>;
};

export type QueryAllArgs = {
  offset: Scalars['Int'];
  limit: Scalars['Int'];
};

export type QueryPopularArgs = {
  offset: Scalars['Int'];
  limit: Scalars['Int'];
};

export type QueryNewestArgs = {
  offset: Scalars['Int'];
  limit: Scalars['Int'];
};

export type QueryQuizzesByTypeArgs = {
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  type?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
};

export type Quiz = {
  __typename?: 'Quiz';
  buttonStart?: Maybe<Scalars['String']>;
  shareTitle?: Maybe<Scalars['String']>;
  questions: Scalars['Int'];
  createdAt: Scalars['String'];
  sponsored: Scalars['Boolean'];
  categories?: Maybe<Array<Maybe<QuizCategories>>>;
  id?: Maybe<Scalars['Float']>;
  title: Scalars['String'];
  type: Scalars['String'];
  content: Scalars['String'];
  mainPhoto: QuizMainPhoto;
  tags?: Maybe<Array<Maybe<QuizTag>>>;
  category?: Maybe<QuizCategory>;
};

export type QuizCategories = {
  __typename?: 'QuizCategories';
  uid: Scalars['Float'];
  secondaryCid?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type QuizCategory = {
  __typename?: 'QuizCategory';
  id: Scalars['Float'];
  name: Scalars['String'];
};

export type QuizMainPhoto = {
  __typename?: 'QuizMainPhoto';
  author?: Maybe<Scalars['String']>;
  width: Scalars['Int'];
  source?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  height: Scalars['Int'];
};

export type QuizTag = {
  __typename?: 'QuizTag';
  uid: Scalars['Float'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  primary?: Maybe<Scalars['String']>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Quiz: ResolverTypeWrapper<Quiz>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  QuizCategories: ResolverTypeWrapper<QuizCategories>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  QuizMainPhoto: ResolverTypeWrapper<QuizMainPhoto>;
  QuizTag: ResolverTypeWrapper<QuizTag>;
  QuizCategory: ResolverTypeWrapper<QuizCategory>;
  CacheControlScope: CacheControlScope;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Int: Scalars['Int'];
  Quiz: Quiz;
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  QuizCategories: QuizCategories;
  Float: Scalars['Float'];
  QuizMainPhoto: QuizMainPhoto;
  QuizTag: QuizTag;
  QuizCategory: QuizCategory;
  CacheControlScope: CacheControlScope;
  Upload: Scalars['Upload'];
};

export type CacheControlDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = {
    maxAge?: Maybe<Maybe<Scalars['Int']>>;
    scope?: Maybe<Maybe<CacheControlScope>>;
  }
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  all?: Resolver<
    Array<ResolversTypes['Quiz']>,
    ParentType,
    ContextType,
    RequireFields<QueryAllArgs, 'offset' | 'limit'>
  >;
  popular?: Resolver<
    Array<ResolversTypes['Quiz']>,
    ParentType,
    ContextType,
    RequireFields<QueryPopularArgs, 'offset' | 'limit'>
  >;
  newest?: Resolver<
    Array<ResolversTypes['Quiz']>,
    ParentType,
    ContextType,
    RequireFields<QueryNewestArgs, 'offset' | 'limit'>
  >;
  quizzesByType?: Resolver<
    Array<ResolversTypes['Quiz']>,
    ParentType,
    ContextType,
    RequireFields<QueryQuizzesByTypeArgs, 'offset' | 'limit'>
  >;
};

export type QuizResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Quiz'] = ResolversParentTypes['Quiz']
> = {
  buttonStart?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  shareTitle?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  questions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sponsored?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  categories?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['QuizCategories']>>>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mainPhoto?: Resolver<
    ResolversTypes['QuizMainPhoto'],
    ParentType,
    ContextType
  >;
  tags?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['QuizTag']>>>,
    ParentType,
    ContextType
  >;
  category?: Resolver<
    Maybe<ResolversTypes['QuizCategory']>,
    ParentType,
    ContextType
  >;
};

export type QuizCategoriesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['QuizCategories'] = ResolversParentTypes['QuizCategories']
> = {
  uid?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  secondaryCid?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type QuizCategoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['QuizCategory'] = ResolversParentTypes['QuizCategory']
> = {
  id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type QuizMainPhotoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['QuizMainPhoto'] = ResolversParentTypes['QuizMainPhoto']
> = {
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type QuizTagResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['QuizTag'] = ResolversParentTypes['QuizTag']
> = {
  uid?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  primary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export interface UploadScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  Quiz?: QuizResolvers<ContextType>;
  QuizCategories?: QuizCategoriesResolvers<ContextType>;
  QuizCategory?: QuizCategoryResolvers<ContextType>;
  QuizMainPhoto?: QuizMainPhotoResolvers<ContextType>;
  QuizTag?: QuizTagResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<
  ContextType
>;
