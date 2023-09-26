'use client';

import { useCallback, useState } from 'react';

export const useForm = (callback: () => void, initialState: object = {}) => {
  const [data, setData] = useState(initialState);

  const handleChange = useCallback(({ target: input }) => {
    const { name, value } = input;
    setData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
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
