'use client';

import { useCallback, useEffect, useState } from 'react';

export const useForm = <T extends object, U extends object>(
  callback: () => void,
  initialState: T,
  initialError: U,
  validate: (data: T) => U
) => {
  const [data, setData] = useState<T>(initialState);
  const [errors, setErrors] = useState<U>(initialError);

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > = useCallback(({ target: input }) => {
    const { name, value } = input;
    setData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(() => {
    if (Object.keys(validate(data)).length > 0) {
      setErrors(validate(data));
      return;
    }

    setErrors(initialError);

    callback();
    setData(initialState);
  }, [callback, data, initialError, initialState, validate]);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setTimeout(() => setErrors(initialError), 5000);
    }
  }, [data, errors, initialError, validate]);

  return {
    data,
    errors,
    setErrors,
    handleChange,
    handleSubmit,
  };
};
