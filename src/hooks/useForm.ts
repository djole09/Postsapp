import { useState } from 'react';

export const useForm = <T>(defaultValues: T) => {
  const [values, setValues] = useState<T>(defaultValues);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const resetForm = () => setValues(defaultValues);

  return {
    values,
    onChange,
    resetForm,
  };
};
