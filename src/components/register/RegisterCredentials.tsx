'use client';

import Heading from '../Heading';
import Input from '../inputs/Input';

const RegisterCredentials = ({
  password,
  passwordConfirm,
  errors,
  onChange,
}) => {
  return (
    <>
      <Heading title='Welcome to iDesignx' subtitle='Create an account!' />
      <Input
        name='password'
        type='password'
        label='Password'
        value={password}
        placeholder='Password'
        onChange={onchange}
        error={errors.password}
      />
      <Input
        name='passwordConfirm'
        type='password'
        label='Confirm password'
        value={passwordConfirm}
        placeholder='Confirm password'
        onChange={onchange}
        error={errors.passwordConfirm}
      />
    </>
  );
};

export default RegisterCredentials;
