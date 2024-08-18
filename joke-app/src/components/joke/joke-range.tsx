'use client';

import { Input } from '@nextui-org/react';
import { Label } from '@radix-ui/react-label';
import { useState } from 'react';

interface JokeRangeProps {
  onChangeRange: (value: { from: number; to: number }) => void;
  onChangeAmount: (value: string) => void;
}

export const JokeRange = ({
  onChangeRange,
  onChangeAmount,
}: JokeRangeProps) => {
  const [range, setRange] = useState({ from: 0, to: 0 });

  const handleChangeFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRange = { ...range, from: parseInt(e.target.value, 10) };
    setRange(newRange);
    onChangeRange(newRange);
  };

  const handleChangeTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRange = { ...range, to: parseInt(e.target.value, 10) };
    setRange(newRange);
    onChangeRange(newRange);
  };

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeAmount(e.target.value);
  };

  return (
    <div className="grid h-auto w-full grid-cols-2 gap-2 rounded-lg bg-zinc-900 p-4">
      {/* Range */}
      <div className="flex flex-col">
        <Label className="text-zinc-300">
          Search for a joke in this ID range:
        </Label>
        <span className="text-sm text-zinc-400">(Optional)</span>
        {/* <Label>from:</Label> */}
        <div className="grid grid-cols-2 gap-2">
          <Input
            color="success"
            type="number"
            label="From"
            placeholder="0"
            labelPlacement="outside"
            min={0}
            value={range.from.toString()}
            onChange={handleChangeFrom}
            className="w-1/2"
            classNames={{
              input: 'text-center',
            }}
          />
          {/* <input type="number" value={range.from} onChange={handleFromChange} /> */}
          {/* <Label>to:</Label> */}
          <Input
            color="secondary"
            type="number"
            label="To"
            placeholder="0"
            labelPlacement="outside"
            min={0}
            value={range.to.toString()}
            onChange={handleChangeTo}
            className="w-1/2"
            classNames={{
              input: 'text-center',
            }}
          />
          {/* <input type="number" value={range.to} onChange={handleToChange} /> */}
        </div>
      </div>

      {/* Amount */}
      <div className="flex flex-col">
        <Label className="text-center text-zinc-300">Amount of jokes:</Label>
        {/* <Label>from:</Label> */}
        <div className="grid h-full place-items-center">
          <Input
            color="danger"
            type="number"
            placeholder="0"
            labelPlacement="outside"
            min={1}
            max={10}
            defaultValue={'1'}
            onChange={handleChangeAmount}
            className="w-1/2"
            classNames={{
              input: 'text-center',
            }}
          />
        </div>
      </div>
    </div>
  );
};
