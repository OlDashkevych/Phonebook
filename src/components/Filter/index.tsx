import React from 'react';
import styles from './Filter.module.css';

interface IFilterProps {
  onSetFilter(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Filter: React.FC<IFilterProps> = ({ onSetFilter }) => {
  return (
    <form>
      <h3 className={styles.title}>Find contact by name</h3>
      <input
        onChange={onSetFilter}
        type="text"
        name="filter"
        placeholder="Enter a name to search..."
      />
    </form>
  );
};

export default Filter;
