'use client';

import { useCallback, useState } from 'react';

const useForm = (
  callback: () => void,
  initialState: object = {},
  validate: any
) => {
  const [errors, setErrors] = useState<any>({});
  const [data, setData] = useState<object | any>(initialState);

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > = useCallback(({ target: input }) => {
    const { name, value } = input;
    setData((prev: object | any) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e?.preventDefault();

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
    data,
    errors,
    setErrors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
