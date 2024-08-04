'use client';

import { cn } from '@/lib/utils';
import { CardStack } from '../ui/card-stack';

export function PhrasesCards() {
  return (
    <div className="flex h-[40rem] w-full items-center justify-center">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        'bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500',
        className,
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: 'Charles Chaplin',
    content: (
      <p>
        A vida é uma tragédia quando vista de perto, mas uma comédia quando
        vista de longe.
      </p>
    ),
  },
  {
    id: 1,
    name: 'Elon Musk',
    designation: 'Gênio, bilionário, playboy, filantropo - Tony Stark',
    content: (
      <p>
        I dont like this Twitter thing,{' '}
        <Highlight>deleting it right away</Highlight> because yolo. Instead, I
        would like to call it <Highlight>X.com</Highlight> so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: 'Leo Lins',
    designation: 'Comediante',
    content: <p>Humor alivia a dor seja ela qual for.</p>,
  },
  {
    id: 3,
    name: 'Leo Lins',
    designation: 'Comediante',
    content: <p>Lembre-se o humor nao tem limite, o ambiente sim.</p>,
  },
  {
    id: 4,
    name: 'William Elesbão',
    designation: 'Full Stack Developer',
    content: (
      <p>
        Coloque-se a uma distância suficiente para achar graça na vida e não
        fique de cu doce, se não, pode ser que um gordo venha lhe enrrabar...
      </p>
    ),
  },
];
