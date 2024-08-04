import { UseGuards } from '@nestjs/common';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { firstValueFrom } from 'rxjs';
import { JokeService } from 'src/application/services/joke/joke.service';
import { JokeUnion } from 'src/domain/entities/joke-union-entities';
import { ValidateAmountPipe } from 'src/domain/validation/validate-amount.pipe';
import { ApiKeyAuthGuard } from 'src/infra/auth/guards/apikey-guard';
import { JokeCategory } from 'src/lib/enums/joke-category';
import { FlagCategory } from 'src/lib/enums/joke-flag-category';
import { JokeLanguage } from 'src/lib/enums/joke-language';
// import { ResponseFormat } from 'src/lib/enums/joke-response-format';
import { JokeType } from 'src/lib/enums/joke-type';

@Resolver(() => JokeUnion)
export class JokeResolver {
  constructor(private readonly jokeService: JokeService) {}

  @UseGuards(ApiKeyAuthGuard)
  @Query(() => JokeUnion, {
    name: 'getJoke',
    description: 'Get a random joke. Requires API key authentication.',
    nullable: true,
  })
  async randomJoke(
    @Args('categories', {
      type: () => [JokeCategory],
      nullable: true,
      defaultValue: JokeCategory.ANY,
    })
    categories?: JokeCategory[],
    @Args('language', {
      type: () => JokeLanguage,
      nullable: true,
      defaultValue: JokeLanguage.EN,
    })
    language?: JokeLanguage,
    @Args('flags', {
      type: () => [FlagCategory],
      nullable: true,
      defaultValue: [],
    })
    flags?: FlagCategory[],
    // @Args('formatResponse', {
    //   type: () => ResponseFormat,
    //   nullable: true,
    //   defaultValue: ResponseFormat.JSON,
    // })
    // formatResponse?: ResponseFormat,
    @Args('jokeType', { type: () => [JokeType], nullable: true })
    jokeType?: JokeType[],
    @Args('searchString', { type: () => String, nullable: true })
    searchString?: string,
    @Args('minId', { type: () => Int, nullable: true })
    minId?: number,
    @Args('maxId', { type: () => Int, nullable: true })
    maxId?: number,
    @Args(
      'amount',
      { type: () => Int, nullable: true, defaultValue: 1 },
      ValidateAmountPipe,
    )
    amount?: number,
  ) {
    const response = await firstValueFrom(
      this.jokeService.getRandomJoke(
        categories,
        language,
        flags,
        // formatResponse,
        jokeType,
        searchString,
        minId,
        maxId,
        amount,
      ),
    );

    if ('jokes' in response.data) {
      return {
        __typename: 'JokeMultiple',
        ...response.data,
      };
    }

    if ('joke' in response.data || 'setup' in response.data) {
      return {
        __typename: 'JokeSingle',
        ...response.data,
      };
    }

    return null;
  }
}
