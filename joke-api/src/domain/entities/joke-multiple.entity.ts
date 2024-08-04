import { Field, ObjectType } from '@nestjs/graphql';
import { JokeSingle } from './joke-single.entity';

@ObjectType()
export class JokeMultiple {
  @Field(() => Boolean, { nullable: true })
  error?: boolean;

  @Field(() => Number, { nullable: true })
  amount: number;

  @Field(() => [JokeSingle], { nullable: true })
  jokes: JokeSingle[];
}
