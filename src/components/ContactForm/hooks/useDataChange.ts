import { useState } from 'react';

interface IContact {
  name: string;
  number: string;
}

interface IArr {
  contact: IContact;
  handleContactChange(e: React.ChangeEvent<HTMLInputElement>): void;
  handleClear(): void;
}

const useDataChange = () => {
  const [contact, setContact] = useState<IContact>({
    name: '',
    number: '',
  });

  const handleContactChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleClear = () => {
    setContact({
      name: '',
      number: '',
    });
  };

  return [contact, handleContactChange, handleClear] as Array<any>;
};
export default useDataChange;
