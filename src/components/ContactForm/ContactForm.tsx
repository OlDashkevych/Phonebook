import React from 'react';
import { v4 as uuid } from 'uuid';
import styles from './ContactForm.module.css';

import useDataChange from './hooks/useDataChange';

interface IContact {
  name: string;
  id: string;
  number: string;
}

interface IContactFormProps {
  items: IContact[];
  onAddItem(сontact: IContact): void;
  setExisting(isExist: boolean): void;
}

const ContactForm: React.FC<IContactFormProps> = ({
  items,
  setExisting,
  onAddItem,
}) => {
  const [contact, handleContactChange, handleClear] = useDataChange();
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, number } = contact;
    if (
      items.some(
        item =>
          item.name.toLocaleLowerCase() === name.toLocaleLowerCase() ||
          item.number === number,
      )
    ) {
      setExisting(true);
      return;
    }

    setExisting(false);
    if (contact.name && contact.number) {
      onAddItem({ ...contact, id: uuid() });
    }
    handleClear();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        maxLength={36}
        placeholder="Enter your name..."
        onChange={handleContactChange}
        value={contact.name}
        required
      />
      <input
        maxLength={10}
        name="number"
        type="number"
        placeholder="Enter your number..."
        onChange={handleContactChange}
        value={contact.number}
        required
      />
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
