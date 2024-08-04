import { registerEnumType } from '@nestjs/graphql';

export enum JokeCategory {
  'ANY' = 'any',
  'PROGRAMMING' = 'programming',
  'MISC' = 'misc',
  'DARK' = 'dark',
  'PUN' = 'pun',
  'SPOOKY' = 'spooky',
  'CHRISTMAS' = 'christmas',
}

registerEnumType(JokeCategory, {
  name: 'JokeCategory',
  description: 'Joke categories',
});
