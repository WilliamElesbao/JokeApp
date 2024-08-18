'use client';

import Image from 'next/image';
import { Tabs } from '../ui/tabs';
import { useEffect, useState } from 'react';

export function JokeCards({ jokes }: { jokes: any }) {
  console.log(jokes);

  const [tabsContent, setTabsContent] = useState<any>([]);
  const [lastJoke, setLastJoke] = useState<any>(null);

  const formatJokeContent = (joke: any) => {
    console.log(joke);
    return {
      title: joke.category,
      value: joke.id,
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-900 p-10 text-xl font-bold text-white">
          {joke.setup && joke.delivery ? (
            <>
              <p>{joke.setup}</p>
              <p>{joke.delivery}</p>
            </>
          ) : (
            <p>{joke.joke}</p>
          )}
        </div>
      ),
    };
  };

  useEffect(() => {
    if (!jokes || !jokes.getJoke) {
      return;
    }

    const newJokesContent = !jokes.getJoke.amount
      ? [formatJokeContent(jokes.getJoke)]
      : jokes.getJoke.jokes.map((joke: any) => formatJokeContent(joke));

    // Atualizar sempre que uma nova piada for recebida
    setTabsContent(newJokesContent);
    setLastJoke(newJokesContent);
  }, [jokes]);

  console.log(tabsContent);

  return (
    <div className="my-4">
      {tabsContent.length > 0 ? (
        <div
          key={JSON.stringify(tabsContent)}
          className="b relative mx-auto my-12 flex h-[20rem] w-full max-w-5xl flex-col items-start justify-start [perspective:1000px]"
        >
          <Tabs tabs={tabsContent} />
        </div>
      ) : (
                <div className="flex flex-col w-full items-center justify-center">
          {/* <span className="text-zinc-400 mb-4">No jokes</span> */}
          <Image
            src={`https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdu86hteesc92zhfae4q2.gif`}
            alt="Pikachu dancing"
            height={100}
            width={300}
            className="rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
