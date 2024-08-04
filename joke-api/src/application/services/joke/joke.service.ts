import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { JokeMultiple } from 'src/domain/entities/joke-multiple.entity';
import { JokeSingle } from 'src/domain/entities/joke-single.entity';
import { JokeCategory } from 'src/lib/enums/joke-category';
import { FlagCategory } from 'src/lib/enums/joke-flag-category';
import { JokeLanguage } from 'src/lib/enums/joke-language';
// import { ResponseFormat } from 'src/lib/enums/joke-response-format';
import { JokeType } from 'src/lib/enums/joke-type';

@Injectable()
export class JokeService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  private readonly apiUrl = this.configService.get<string>('JOKE_API_URL');

  getRandomJoke(
    category?: JokeCategory[],
    language?: JokeLanguage,
    flags?: FlagCategory[],
    // formatResponse?: ResponseFormat,
    jokeType?: JokeType[],
    searchString?: string,
    minId?: number,
    maxId?: number,
    amount?: number,
  ): Observable<AxiosResponse<JokeSingle | JokeMultiple>> {
    let url = `${this.apiUrl}/joke`;

    if (
      category &&
      category.length > 0 &&
      !category.includes(JokeCategory.ANY)
    ) {
      url += `/${category.join(',')}`;
    } else {
      url += '/Any';
    }

    const queryParams: string[] = [];

    if (!language.includes(JokeLanguage.EN)) {
      queryParams.push(`lang=${language}`);
    }

    if (flags && flags.length > 0) {
      queryParams.push(`blacklistFlags=${flags.join(',')}`);
    }

    // if (formatResponse && formatResponse !== ResponseFormat.JSON) {
    //   queryParams.push(`format=${formatResponse}`);
    // }

    if (jokeType && jokeType.length > 0) {
      queryParams.push(`type=${jokeType.join(',')}`);
    }

    if (searchString) {
      queryParams.push(`contains=${searchString}`);
    }

    if (
      minId !== undefined &&
      minId !== null &&
      minId > 0 &&
      maxId !== undefined &&
      maxId !== null &&
      maxId > minId &&
      minId < maxId
    ) {
      queryParams.push(`idRange=${minId}-${maxId}`);
    }

    if (!!minId && !!maxId && minId === maxId) {
      queryParams.push(`idRange=${minId}`);
    }

    if (amount !== undefined && amount !== null && amount > 1 && amount <= 10) {
      queryParams.push(`amount=${amount}`);
    }

    if (queryParams.length > 0) {
      url += `?${queryParams.join('&')}`;
    }

    return this.httpService.get<JokeSingle | JokeMultiple>(url);
  }
}
