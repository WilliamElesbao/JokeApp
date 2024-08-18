'use client';

import {
  Checkbox,
  CheckboxGroup,
  Select,
  SelectItem,
  Switch,
} from '@nextui-org/react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Label } from '@radix-ui/react-label';
import { useState } from 'react';

interface CategoryProps {
  onChangeCategory: (value: string[]) => void;
  onChangeLanguage: (value: string) => void;
  selectedLanguage: string;
}

export const Category = ({
  onChangeCategory,
  onChangeLanguage,
}: CategoryProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const handleChangeCategory = (value: string[]) => {
    setSelectedCategories(value);
    onChangeCategory(value);
  };

  // const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   onChangeLanguage([event.target.value]);
  // };

  const handleChangeLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    if (event) {
      setSelectedLanguage(event.target.value);
      onChangeLanguage(event.target.value);
    }
  };

  return (
    <div className="grid h-auto w-full grid-cols-2 gap-2 rounded-lg bg-zinc-900 p-4">
      <div className="flex flex-col gap-2">
        {/* Category */}
        <div className="flex flex-col">
          <Label className="text-zinc-300">Category</Label>
          <span className="text-sm text-zinc-400">Select a category</span>
          <Switch
            defaultSelected
            size="sm"
            color="success"
            thumbIcon={({ isSelected, className }) => {
              setIsSelected(isSelected);
              return isSelected ? (
                <SunIcon className={className} />
              ) : (
                <MoonIcon className={className} />
              );
            }}
            className="mt-2"
          >
            <span className="text-base text-zinc-400">
              {isSelected ? 'Any' : 'Custom'}
            </span>
          </Switch>
        </div>
        {/* <RadioCategoryGroup /> */}
        {/* Language */}
        <Select
          label="Select a language"
          placeholder="Select some language"
          value={selectedLanguage}
          className="w-full"
          onChange={handleChangeLanguage}
          defaultSelectedKeys={['EN']}
          color="success"
        >
          <SelectItem key={'EN'}>English</SelectItem>
          <SelectItem key={'PTBR'}>Portuguese</SelectItem>
          <SelectItem key={'DE'}>German</SelectItem>
        </Select>
      </div>
      {/* Categories */}
      <div className="flex">
        <CheckboxGroup
          orientation="horizontal"
          color="success"
          value={selectedCategories}
          onChange={handleChangeCategory}
          isDisabled={isSelected}
        >
          <span className="text-sm text-zinc-400">
            Select some one or more categories
          </span>
          <div className="mt-6 grid w-full grid-cols-2">
            <div className="flex flex-col">
              <Checkbox value="PROGRAMMING">
                <span className="text-sm text-white">Dev</span>
              </Checkbox>
              <Checkbox value="MISC">
                <span className="text-sm text-white">Misc</span>
              </Checkbox>
              <Checkbox value="DARK">
                <span className="text-sm text-white">Dark</span>
              </Checkbox>
            </div>
            <div className="flex flex-col">
              <Checkbox value="PUN">
                <span className="text-sm text-white">Pun</span>
              </Checkbox>
              <Checkbox value="SPOOKY">
                <span className="text-sm text-white">Spooky</span>
              </Checkbox>
              <Checkbox value="CHRISTMAS">
                <span className="text-sm text-white">Christmas</span>
              </Checkbox>
            </div>
          </div>
        </CheckboxGroup>
      </div>
    </div>
  );
};
