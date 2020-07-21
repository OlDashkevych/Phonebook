import { useState } from 'react';

interface IUserData {
  email: string;
  password: string;
}

const useDataChange = () => {
  const [data, setData] = useState<IUserData>({
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
      email: '',
      password: '',
    });
  };

  return [data, handleDataChange, handleClear] as Array<any>;
};
export default useDataChange;
