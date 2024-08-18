'use client';

import { Form } from '@/components/joke/form';
import { JokeCards } from '@/components/joke/joke-cards';
import { useState } from 'react';

export default function Page() {
  const [jokes, setJokes] = useState<any>([]);
  async function renderJokes(jokes: any) {
    console.log(jokes);
    setJokes(jokes);
  }
  return (
    <div className="">
      <Form jokes={renderJokes} />
      <JokeCards jokes={jokes.data} />
    </div>
  );
}
