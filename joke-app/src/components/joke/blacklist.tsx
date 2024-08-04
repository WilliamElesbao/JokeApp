'use client';

import { Label } from '@/components/ui/label';
import { Checkbox, CheckboxGroup } from '@nextui-org/react';
import { useState } from 'react';

interface BlacklistProps {
  onChange: (value: string[]) => void;
}

export const Blacklist = ({ onChange }: BlacklistProps) => {
  const [selectedFlags, setSelectedFlags] = useState<string[]>([]);

  const handleChange = (value: string[]) => {
    setSelectedFlags(value);
    onChange(value);
  };

  return (
    <div className="h-auto w-full rounded-lg bg-gray-100 dark:bg-neutral-800">
      <Label>Select flags to blacklist</Label>
      <CheckboxGroup
        orientation="horizontal"
        color="danger"
        value={selectedFlags}
        onChange={handleChange}
      >
        <Checkbox value="NSFW">NSFW</Checkbox>
        <Checkbox value="RELIGIOUS">Religious</Checkbox>
        <Checkbox value="POLITICAL">Political</Checkbox>
        <Checkbox value="RACIST">Racist</Checkbox>
        <Checkbox value="SEXIST">Sexist</Checkbox>
        <Checkbox value="EXPLICIT">Explicit</Checkbox>
      </CheckboxGroup>
    </div>
  );
};
