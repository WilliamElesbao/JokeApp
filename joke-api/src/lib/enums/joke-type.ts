import { registerEnumType } from '@nestjs/graphql';

export enum JokeType {
  'SINGLE' = 'single',
  'TWOPART' = 'twopart',
}

registerEnumType(JokeType, { name: 'JokeType', description: 'Joke types' });
