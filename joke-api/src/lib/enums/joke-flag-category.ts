import { registerEnumType } from '@nestjs/graphql';

export enum FlagCategory {
  'NSFW' = 'nsfw',
  'RELIGIOUS' = 'religious',
  'POLITICAL' = 'political',
  'RACIST' = 'racist',
  'SEXIST' = 'sexist',
  'EXPLICIT' = 'explicit',
}

registerEnumType(FlagCategory, {
  name: 'FlagCategory',
  description: 'Flag categories',
});
