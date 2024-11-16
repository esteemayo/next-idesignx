'use client';

import Heading from '../Heading';
import Input from '../inputs/Input';

import { RegisterInfoProps } from '@/types';

const RegisterInfo = ({ name, email, errors, onChange }: RegisterInfoProps) => {
  return (
    <>
      <Heading title='Welcome to iDesignx' subtitle='Create an account!' />
      <Input
        name='name'
        label='Name'
        value={name}
        placeholder='Name'
        onChange={onChange}
        error={errors.name}
      />
      <Input
        name='email'
        type='email'
        label='Email address'
        value={email}
        placeholder='Email address'
        onChange={onChange}
        error={errors.email}
      />
    </>
  );
};

export default RegisterInfo;
