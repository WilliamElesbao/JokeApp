'use client';

import { PlaceholdersAndVanishInput } from '../ui/placeholders-and-vanish-input';

export function InputFilter() {
  const placeholders = [
    'Search for a joke that contains this search string...',
    'Went...',
    'Black...',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted');
  };
  return (
    <div className="w-full flex-col items-center justify-center px-4">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
