'use client';

import Heading from '../Heading';
import Input from '../inputs/Input';

import { DesignInfoProps } from '@/types';

const DesignInfo = ({
  name,
  email,
  address,
  errors,
  onChange,
}: DesignInfoProps) => {
  return (
    <>
      <Heading
        title='Share some basics info about you'
        subtitle='Tell us about you'
      />
      <Input
        name='name'
        label='Your name'
        value={name}
        placeholder='Your name'
        onChange={onChange}
        error={errors.name}
      />
      <Input
        name='email'
        type='email'
        label='Your email'
        value={email}
        placeholder='Your email'
        onChange={onChange}
        error={errors.email}
      />
      <Input
        name='address'
        label='Your address'
        value={address}
        placeholder='Your address'
        onChange={onChange}
        error={errors.address}
      />
    </>
  );
};

export default DesignInfo;
