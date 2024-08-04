import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Flags } from './flags.entity';

@ObjectType()
export class JokeSingle {
  @Field({ nullable: true })
  error: boolean;

  @Field({ nullable: true })
  category: string;

  @Field({ nullable: true })
  type: string;

  @Field({ nullable: true })
  setup?: string;

  @Field({ nullable: true })
  delivery?: string;

  @Field({ nullable: true })
  joke?: string;

  @Field({ nullable: true })
  flags: Flags;

  @Field(() => Int, { nullable: true })
  id: number;

  @Field({ nullable: true })
  safe: boolean;

  @Field({ nullable: true })
  lang: string;
}
