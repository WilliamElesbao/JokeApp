'use client';

import { Checkbox, CheckboxGroup } from '@nextui-org/react';
import { RadioCategoryGroup } from './radio-group-category';
import { useState } from 'react';

interface CategoryProps {
  onChange: (value: string[]) => void;
}

export const Category = ({ onChange }: CategoryProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleChange = (value: string[]) => {
    setSelectedCategories(value);
    onChange(value);
  };

  return (
    <div className="h-auto w-full rounded-lg bg-gray-100 dark:bg-neutral-800">
      Category
      <RadioCategoryGroup />
      <CheckboxGroup
        label="Select some one or more categories"
        orientation="horizontal"
        color="danger"
        value={selectedCategories}
        onChange={handleChange}
      >
        <Checkbox value="PROGRAMMING">Programming</Checkbox>
        <Checkbox value="MISC">Misc</Checkbox>
        <Checkbox value="DARK">Dark</Checkbox>
        <Checkbox value="PUN">Pun</Checkbox>
        <Checkbox value="SPOOKY">Spooky</Checkbox>
        <Checkbox value="CHRISTMAS">Christmas</Checkbox>
      </CheckboxGroup>
    </div>
  );
};
