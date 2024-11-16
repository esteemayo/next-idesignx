'use client';

import Heading from './Heading';
import Input from './inputs/Input';

import { LoginInfoProps } from '@/types';

const LoginInfo = ({ email, password, errors, onChange }: LoginInfoProps) => {
  return (
    <>
      <Heading title='Welcome back' subtitle='Log into your account!' />
      <Input
        name='email'
        type='email'
        label='Email address'
        value={email}
        placeholder='Email address'
        onChange={onChange}
        error={errors.email}
      />
      <Input
        name='password'
        type='password'
        label='Password'
        value={password}
        placeholder='Password'
        onChange={onChange}
        error={errors.password}
      />
    </>
  );
};

export default LoginInfo;
