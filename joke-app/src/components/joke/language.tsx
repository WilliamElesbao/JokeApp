// Language.tsx
interface LanguageProps {
  onChange: (value: string) => void;
  selectedLanguage: string;
}

export const Language = ({ onChange, selectedLanguage }: LanguageProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select value={selectedLanguage} onChange={handleChange}>
      <option value="EN">English</option>
      <option value="PTBR">Portuguese</option>
      <option value="DE">German</option>
      {/* Add other languages as needed */}
    </select>
  );
};
