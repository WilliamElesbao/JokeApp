'use client';

import axios from 'axios';
import { useState } from 'react';
import { Blacklist } from './blacklist';
import { Category } from './category';
import { JokeAmount } from './joke-amount';
import { JokeRange } from './joke-range';
import { JokeSearch } from './joke-search';
import { JokeType } from './joke-type';
import { Language } from './language';

interface FormData {
  category: string[];
  language: string;
  blacklist: string[];
  jokeType: string[] | null;
  jokeRange: { from: number | null; to: number | null };
  jokeAmount: number | null;
  jokeSearch: string | null;
}

export const Form = ({jokes}:{jokes: any}) => {
  const [formData, setFormData] = useState<FormData>({
    category: ['ANY'], // Default category
    language: 'EN', // Default language
    blacklist: [],
    jokeType: ['SINGLE', 'TWOPART'],
    jokeRange: {
      from: null,
      to: null,
    },
    jokeAmount: 1,
    jokeSearch: null,
  });

  const handleInputChange = (name: keyof FormData, value: any) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    console.log(formData.category);
    console.log(formData.language);
    console.log(JSON.stringify(formData.blacklist));
    // console.log(formData.blacklist)
    console.log(JSON.stringify(formData.jokeType));
    console.log(formData.jokeSearch);
    console.log(formData.jokeRange.from);
    console.log(formData.jokeRange.to);
    console.log(formData.jokeAmount);

    const query = `
      query GetJoke(
        $categories: [JokeCategory!]
        $language: JokeLanguage!
        $flags: [FlagCategory!]
        $jokeType: [JokeType!]
        $searchString: String
        $minId: Int
        $maxId: Int
        $amount: Int!
      ) {
        getJoke(
          categories: $categories
          language: $language
          flags: $flags
          jokeType: $jokeType
          searchString: $searchString
          minId: $minId
          maxId: $maxId
          amount: $amount
        ) {
          ... on JokeMultiple {
            error
            amount
            jokes {
              id
              type
              flags {
                nsfw
                religious
                political
                racist
                sexist
                explicit
              }
              setup
              delivery
              joke
              category
              error
            }
          }
          ... on JokeSingle {
            error
            category
            type
            setup
            delivery
            joke
            id
            safe
            lang
          }
        }
      }
    `;
    const variables = {
      categories: formData.category,
      language: formData.language,
      flags: formData.blacklist,
      jokeType: formData.jokeType,
      searchString: formData.jokeSearch,
      minId: Number(formData.jokeRange.from),
      maxId: Number(formData.jokeRange.to),
      amount: Number(formData.jokeAmount),
    };

    try {
      const response = await axios.post(
        'http://localhost:3005/graphql',
        { query, variables },
        {
          headers: { Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN },
        },
      );
      console.log(response.data);
      jokes(response.data)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.message);
      } else {
        console.error('Unknown error:', error);
      }
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Category onChange={(value) => handleInputChange('category', value)} />
      <Language
        onChange={(value) => handleInputChange('language', value)}
        selectedLanguage={formData.language}
      />
      <Blacklist onChange={(value) => handleInputChange('blacklist', value)} />
      <JokeType onChange={(value) => handleInputChange('jokeType', value)} />
      <JokeRange onChange={(value) => handleInputChange('jokeRange', value)} />
      <JokeAmount
        onChange={(value) => handleInputChange('jokeAmount', value)}
      />
      <JokeSearch
        onChange={(value) => handleInputChange('jokeSearch', value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
