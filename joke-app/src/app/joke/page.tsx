'use client';

import { Form } from '@/components/joke/form';
import { JokeCards } from '@/components/joke/joke-cards';
import { useState } from 'react';

export default function Page() {
  const [jokes, setJokes] = useState<any>([]);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [noJoke, setNotJoke] = useState<boolean>(false);

  async function renderJokes(jokes: any) {
    setJokes(jokes);
  }

  return (
    <div className="md:grid md:grid-cols-2">
      <Form
        jokes={renderJokes}
        isPendingRequest={(pendingStatus) => setIsPending(pendingStatus)}
        noJoke={(noJokeStatus) => setNotJoke(noJokeStatus)}
      />
      <JokeCards jokes={jokes.data} isPending={isPending} />
    </div>
  );
}
