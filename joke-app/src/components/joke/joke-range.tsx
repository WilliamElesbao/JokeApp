'use client';

import { useState } from 'react';

interface JokeRangeProps {
  onChange: (value: { from: number; to: number }) => void;
}

export const JokeRange = ({ onChange }: JokeRangeProps) => {
  const [range, setRange] = useState({ from: 0, to: 0 });

  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRange = { ...range, from: parseInt(e.target.value, 10) };
    setRange(newRange);
    onChange(newRange);
  };

  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRange = { ...range, to: parseInt(e.target.value, 10) };
    setRange(newRange);
    onChange(newRange);
  };

  return (
    <div className="flex gap-2">
      <div className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800">
        Search for a joke in this ID range:
        <label>
          from:
          <input type="number" value={range.from} onChange={handleFromChange} />
        </label>
        <label>
          to:
          <input type="number" value={range.to} onChange={handleToChange} />
        </label>
      </div>
    </div>
  );
};
