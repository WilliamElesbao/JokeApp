interface JokeAmountProps {
  onChange: (value: string) => void;
}

export const JokeAmount = ({ onChange }: JokeAmountProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex gap-2">
      <div
        key={'first-array_6'}
        className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800"
      >
        <label>
          Amount of jokes:
          <input type="number" onChange={handleChange} defaultValue={1} />
        </label>
      </div>
    </div>
  );
};
