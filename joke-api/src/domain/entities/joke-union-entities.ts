import { createUnionType } from '@nestjs/graphql';
import { JokeMultiple } from './joke-multiple.entity';
import { JokeSingle } from './joke-single.entity';

export const JokeUnion = createUnionType({
  name: 'JokeUnion',
  types: () => [JokeSingle, JokeMultiple] as const,
  resolveType(value) {
    if ('joke' in value || 'setup' in value) {
      return JokeSingle;
    }
    if ('jokes' in value) {
      return JokeMultiple;
    }
    return null;
  },
});
