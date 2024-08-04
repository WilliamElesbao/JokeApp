import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Flags {
  @Field({ nullable: true })
  nsfw: boolean;

  @Field({ nullable: true })
  religious: boolean;

  @Field({ nullable: true })
  political: boolean;

  @Field({ nullable: true })
  racist: boolean;

  @Field({ nullable: true })
  sexist: boolean;

  @Field({ nullable: true })
  explicit: boolean;
}
