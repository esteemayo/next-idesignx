'use client';

import { useCallback, useState } from 'react';

const useForm = (callback: () => void, initialState = {}, validate: any) => {
  const [errors, setErrors] = useState<any>({});
  const [formData, setFormData] = useState<object>(initialState);

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > = useCallback(({ target: input }) => {
    const { name, value } = input;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (Object.values(validate(formData)).length > 0) {
        setErrors(validate(formData));
        return;
      }

      setErrors({});

      callback();
      setFormData(initialState);
    },
    [callback, formData, initialState, validate]
  );

  return {
    errors,
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
