import { useState } from 'react';

interface IUserData {
  name: string;
  email: string;
  password: string;
}

const useDataChange = () => {
  const [data, setData] = useState<IUserData>({
    name: '',
    email: '',
    password: '',
  });

  const handleDataChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleClear = () => {
    setData({
      name: '',
      email: '',
      password: '',
    });
  };

  return [data, handleDataChange, handleClear] as Array<any>;
};
export default useDataChange;
