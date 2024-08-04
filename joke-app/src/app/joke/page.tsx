'use client'

import { Form } from "@/components/joke/form";
import { JokeCards } from "@/components/joke/joke-cards";
import { SidebarNav } from "@/components/joke/sidebar";
import { useState } from "react";

export default function Page() {
  const [jokes, setJokes] = useState<any>([]);
  async function renderJokes(jokes: any) {
    console.log(jokes);
    setJokes(jokes);
  }
  return (
    <>
      <SidebarNav >
        {/* <Dashboard /> */}
        <Form jokes={renderJokes}/>
        {/* if change jokes rerender this cards */}
        
        <JokeCards jokes={jokes.data}/>
      </SidebarNav>
    </>
  );
}
