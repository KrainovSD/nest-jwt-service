export type TokenType = 'refresh' | 'access';

export type GetUserInfoOptions = {
  header?: string;
  cookie?: string;
};

export type GenerateTokenOptions = {
  user: UserInfo;
  type: TokenType;
};

export type VerifyTokenOptions = {
  token: unknown;
  type: TokenType;
};
