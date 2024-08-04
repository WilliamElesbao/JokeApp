import { FlipWords } from '../ui/flip-words';

export function TechStacks() {
  const words = ['NextJS', 'NestJS', 'GraphQL', 'NodeJS'];
  const libs = ['Aceternity UI', 'Next UI'];

  return (
    <div className="mx-4 mt-8">
      <div className="text-base font-normal text-neutral-200 dark:text-neutral-400">
        Tech Stacks
        <FlipWords words={words} duration={800} />
      </div>
      <div className="text-base font-normal text-neutral-200 dark:text-neutral-400">
        Frontend builded with 
        <FlipWords words={libs} duration={1200} />
      </div>
    </div>
  );
}
