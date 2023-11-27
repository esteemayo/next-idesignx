'use client';

import { useCallback, useState } from 'react';

const useForm = (callback: () => void, initialState = {}, validate: any) => {
  const [errors, setErrors] = useState<any>({});
  const [data, setData] = useState<object>(initialState);

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > = useCallback(({ target: input }) => {
    const { name, value } = input;
    setData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (Object.values(validate(data)).length > 0) {
        setErrors(validate(data));
        return;
      }

      setErrors({});

      callback();
      setData(initialState);
    },
    [callback, data, initialState, validate]
  );

  return {
    errors,
    data,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
