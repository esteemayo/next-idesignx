'use client';

import Heading from '../Heading';
import Input from '../inputs/Input';

import { RegisterDescriptionProps } from '@/types';

const RegisterDescription = ({
  username,
  phone,
  errors,
  onChange,
}: RegisterDescriptionProps) => {
  return (
    <>
      <Heading title='Welcome to iDesignx' subtitle='Create an account!' />
      <Input
        name='username'
        label='Username'
        value={username}
        placeholder='Username'
        onChange={onChange}
        error={errors.username}
      />
      <Input
        name='phone'
        type='tel'
        label='Phone number'
        value={phone}
        placeholder='Phone number'
        onChange={onChange}
        error={errors.phone}
      />
    </>
  );
};

export default RegisterDescription;
