'use client';

import { Checkbox, CheckboxGroup } from '@nextui-org/react';
import { useState } from 'react';

interface CategoryProps {
  onChange: (value: string[]) => void;
}

export const JokeType = ({ onChange }: CategoryProps) => {
  const [typeSelected, setTypeSelected] = useState<string[]>(['SINGLE','TWOPART']);

  const handleChange = (value: string[]) => {
    setTypeSelected(value);
    onChange(value);
  };

  return (
    <div className="h-auto w-full rounded-lg bg-gray-100 dark:bg-neutral-800">
      Joke Type
      <CheckboxGroup
        label=""
        orientation="horizontal"
        color="danger"
        value={typeSelected}
        onChange={handleChange}
      >
        <Checkbox value="SINGLE">Single</Checkbox>
        <Checkbox value="TWOPART">Twopart</Checkbox>
      </CheckboxGroup>
    </div>
  );
};
