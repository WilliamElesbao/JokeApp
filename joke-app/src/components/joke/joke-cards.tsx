'use client';

import Image from "next/image";
import { Tabs } from "../ui/tabs";
import { useEffect, useState } from "react";

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
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
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
    <>
      {tabsContent.length > 0 ? (
        <div key={JSON.stringify(tabsContent)} className="b relative mx-auto my-40 flex h-[20rem] w-full max-w-5xl flex-col items-start justify-start [perspective:1000px] md:h-[40rem]">
          <Tabs tabs={tabsContent} />
        </div>
      ) : (
        <>No jokes</>
      )}
    </>
  );
}