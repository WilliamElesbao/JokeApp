'use client';

import { Button } from '@nextui-org/button';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { Blacklist } from './blacklist';
import { Category } from './category';
import { JokeRange } from './joke-range';
import { JokeSearch } from './joke-search';
import { JokeType } from './joke-type';

interface FormData {
  category: string[];
  language: string;
  blacklist: string[];
  jokeType: string[] | null;
  jokeRange: { from: number | null; to: number | null };
  jokeAmount: number | null;
  jokeSearch: string | null;
}

export const Form = ({
  jokes,
  isPendingRequest,
  noJoke,
}: {
  jokes: any;
  isPendingRequest: (pendingStatus: boolean) => void;
  noJoke: (noJokeStatus: boolean) => void;
}) => {
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

  const { isFetching, isPending, refetch, data } = useQuery({
    queryKey: ['get-jokes'],
    queryFn: async () => {
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
      const response = await axios.post(
        'http://localhost:3005/graphql',
        { query, variables },
        {
          headers: { Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN },
        },
      );
      const data = response.data;
      // add a delay manually for Pikachu to dance.
      await new Promise((resolve) => setTimeout(resolve, 3000));

      console.log(response.data);
      jokes(response.data);
      noJoke(data.data.getJoke === null)
      // return data;
    },
    enabled: false, // Disable automatic query execution
    placeholderData: keepPreviousData,
  });

  // console.log(data);
  
  // console.log(data.data.getJoke === null);

  // {data && noJoke(data.data.getJoke === null)}

  isPendingRequest(isPending);

  const handleInputChange = (name: keyof FormData, value: any) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch();
    // console.log(formData);
    // console.log(formData.category);
    // console.log(formData.language);
    // console.log(JSON.stringify(formData.blacklist));
    // console.log(formData.blacklist);
    // console.log(JSON.stringify(formData.jokeType));
    // console.log(formData.jokeSearch);
    // console.log(formData.jokeRange.from);
    // console.log(formData.jokeRange.to);
    // console.log(formData.jokeAmount);

    // const query = `
    //   query GetJoke(
    //     $categories: [JokeCategory!]
    //     $language: JokeLanguage!
    //     $flags: [FlagCategory!]
    //     $jokeType: [JokeType!]
    //     $searchString: String
    //     $minId: Int
    //     $maxId: Int
    //     $amount: Int!
    //   ) {
    //     getJoke(
    //       categories: $categories
    //       language: $language
    //       flags: $flags
    //       jokeType: $jokeType
    //       searchString: $searchString
    //       minId: $minId
    //       maxId: $maxId
    //       amount: $amount
    //     ) {
    //       ... on JokeMultiple {
    //         error
    //         amount
    //         jokes {
    //           id
    //           type
    //           flags {
    //             nsfw
    //             religious
    //             political
    //             racist
    //             sexist
    //             explicit
    //           }
    //           setup
    //           delivery
    //           joke
    //           category
    //           error
    //         }
    //       }
    //       ... on JokeSingle {
    //         error
    //         category
    //         type
    //         setup
    //         delivery
    //         joke
    //         id
    //         safe
    //         lang
    //       }
    //     }
    //   }
    // `;
    // const variables = {
    //   categories: formData.category,
    //   language: formData.language,
    //   flags: formData.blacklist,
    //   jokeType: formData.jokeType,
    //   searchString: formData.jokeSearch,
    //   minId: Number(formData.jokeRange.from),
    //   maxId: Number(formData.jokeRange.to),
    //   amount: Number(formData.jokeAmount),
    // };

    // try {
    // const response = await axios.post(
    //   'http://localhost:3005/graphql',
    //   { query, variables },
    //   {
    //     headers: { Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN },
    //   },
    // );
    // console.log(response.data);
    // jokes(response.data);
    // } catch (error) {
    //   if (axios.isAxiosError(error)) {
    //     console.error('Axios error:', error.message);
    //   } else {
    //     console.error('Unknown error:', error);
    //   }
    // }
  };

  return (
    <form onSubmit={onSubmit} className="m-2">
      <Category
        onChangeLanguage={(value) => handleInputChange('language', value)}
        onChangeCategory={(value) => handleInputChange('category', value)}
        selectedLanguage={formData.language}
      />
      {/* <Language
        onChange={(value) => handleInputChange('language', value)}
        selectedLanguage={formData.language}
      /> */}
      <Blacklist onChange={(value) => handleInputChange('blacklist', value)} />
      <JokeType onChange={(value) => handleInputChange('jokeType', value)} />
      <JokeRange
        onChangeRange={(value) => handleInputChange('jokeRange', value)}
        onChangeAmount={(value) => handleInputChange('jokeAmount', value)}
      />
      {/* <JokeAmount
        onChange={(value) => handleInputChange('jokeAmount', value)}
      /> */}
      <JokeSearch
        onChange={(value) => handleInputChange('jokeSearch', value)}
      />
      <Button
        type="submit"
        className="mt-2 w-full rounded-full font-semibold text-white"
        color="secondary"
        disabled={isPending && isFetching}
      >
        {isPending && isFetching ? (
          <svg
            className="h-5 w-5 animate-spin text-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              fill="currentColor"
            />
          </svg>
        ) : (
          'Submit'
        )}
      </Button>
    </form>
  );
};
