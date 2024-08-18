'use client';

import { Checkbox, CheckboxGroup } from '@nextui-org/react';
import { Label } from '@radix-ui/react-label';
import { useState } from 'react';

interface CategoryProps {
  onChange: (value: string[]) => void;
}

export const JokeType = ({ onChange }: CategoryProps) => {
  const [typeSelected, setTypeSelected] = useState<string[]>([
    'SINGLE',
    'TWOPART',
  ]);

  const handleChange = (value: string[]) => {
    setTypeSelected(value);
    onChange(value);
  };

  return (
    <div className="my-4 grid h-auto w-full grid-cols-2 items-center gap-2 rounded-lg bg-zinc-900 p-4">
      <div className="flex flex-col">
        <Label className="text-zinc-300">Joke Type</Label>
        <span className="text-sm text-zinc-400"></span>
      </div>

      <div className="flex">
        <CheckboxGroup
          label=""
          orientation="vertical"
          color="secondary"
          value={typeSelected}
          onChange={handleChange}
        >
          <Checkbox value="SINGLE">
            <span className="text-sm text-white">Single</span>
          </Checkbox>
          <Checkbox value="TWOPART">
            <span className="text-sm text-white">Twopart</span>
          </Checkbox>
        </CheckboxGroup>
      </div>
    </div>
  );
};
