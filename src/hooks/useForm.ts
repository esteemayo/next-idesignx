'use client';

import { ChangeEventHandler, useCallback, useState } from 'react';

export const useForm = (callback: () => void, initialState: object = {}) => {
  const [data, setData] = useState(initialState);

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target: input }) => {
      const { name, value } = input;
      setData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      callback();
      setData(initialState);
    },
    [callback, initialState]
  );

  return {
    data,
    handleChange,
    handleSubmit,
  };
};
