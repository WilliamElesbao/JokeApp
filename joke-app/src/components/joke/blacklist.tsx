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
    <div className="my-4 grid h-auto w-full grid-cols-2 items-center gap-2 rounded-lg bg-zinc-900 p-4">
      <div className="flex flex-col gap-2">
        <Label className="text-zinc-300">Select flags to blacklist</Label>
        <span className="text-sm text-zinc-400">(Optional)</span>
      </div>
      <div className="flex">
        <CheckboxGroup
          orientation="horizontal"
          color="danger"
          value={selectedFlags}
          onChange={handleChange}
        >
          <span className="text-sm text-zinc-400 hidden md:block">
            Select some flags to blacklist
          </span>
          <div className="grid w-full grid-cols-2 gap-2">
            <div className="flex flex-col">
              <Checkbox value="NSFW">
                <span className="text-sm text-white">NSFW</span>
              </Checkbox>
              <Checkbox value="RELIGIOUS">
                <span className="text-sm text-white">Religious</span>
              </Checkbox>
              <Checkbox value="POLITICAL">
                <span className="text-sm text-white">Political</span>
              </Checkbox>
            </div>
            <div className="flex flex-col">
              <Checkbox value="RACIST">
                <span className="text-sm text-white">Racist</span>
              </Checkbox>
              <Checkbox value="SEXIST">
                <span className="text-sm text-white">Sexist</span>
              </Checkbox>
              <Checkbox value="EXPLICIT">
                <span className="text-sm text-white">Explicit</span>
              </Checkbox>
            </div>
          </div>
        </CheckboxGroup>
      </div>
    </div>
  );
};
