interface JokeSearchProps {
  onChange: (value: string) => void;
}

export const JokeSearch = ({ onChange }: JokeSearchProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex gap-2">
      <div className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800">
        <label>
          Search jokes:
          <input type="text" onChange={handleChange} />
        </label>
      </div>
    </div>
  );
};
