import { useState } from 'react';

interface IArr {
  filter: string;
  handleFilterChange(e: React.ChangeEvent<HTMLInputElement>): void;
  handleClearFilter(): void;
}

const useFilterChange = () => {
  const [filter, setFilter] = useState<string>('');

  const handleFilterChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(value);
  };

  const handleClearFilter = () => {
    setFilter('');
  };

  return [filter, handleFilterChange, handleClearFilter] as Array<any>;
};
export default useFilterChange;
