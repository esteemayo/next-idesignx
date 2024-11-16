'use client';

import Heading from '../Heading';
import Input from '../inputs/Input';

import { RegisterCredentialsProps } from '@/types';

const RegisterCredentials = ({
  password,
  passwordConfirm,
  errors,
  onChange,
}: RegisterCredentialsProps) => {
  return (
    <>
      <Heading title='Welcome to iDesignx' subtitle='Create an account!' />
      <Input
        name='password'
        type='password'
        label='Password'
        value={password}
        placeholder='Password'
        onChange={onChange}
        error={errors.password}
      />
      <Input
        name='passwordConfirm'
        type='password'
        label='Confirm password'
        value={passwordConfirm}
        placeholder='Confirm password'
        onChange={onChange}
        error={errors.passwordConfirm}
      />
    </>
  );
};

export default RegisterCredentials;
