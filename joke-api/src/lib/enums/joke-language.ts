import { registerEnumType } from '@nestjs/graphql';

export enum JokeLanguage {
  'EN' = 'en',
  'PTBR' = 'pt',
  'DE' = 'de',
}

registerEnumType(JokeLanguage, {
  name: 'JokeLanguage',
  description: 'Joke languages',
});
