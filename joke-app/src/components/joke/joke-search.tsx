import { Input } from '@nextui-org/react';
import { SearchIcon } from './SearchIcon';

interface JokeSearchProps {
  onChange: (value: string) => void;
}

export const JokeSearch = ({ onChange }: JokeSearchProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="my-4 grid h-auto w-full rounded-lg bg-zinc-900 p-4">
      <Input
        radius="full"
        classNames={{
          label: 'text-white/50',
          input: ['bg-transparent', 'text-white', 'placeholder:text-white'],
          innerWrapper: 'bg-transparent',
          inputWrapper: [
            'shadow-xl',
            'bg-gradient-to-r from-blue-500 to-purple-500',
            'hover:bg-default-200/70',
            'group-data-[focus=true]:bg-default-200/50',
            '!cursor-text',
          ],
        }}
        placeholder="Search jokes..."
        startContent={
          <SearchIcon className="pointer-events-none mb-0.5 flex-shrink-0 text-white" />
        }
        onChange={handleChange}
      />
    </div>
  );
};
