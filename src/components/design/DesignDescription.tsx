'use client';

import Heading from '../Heading';

import Input from '../inputs/Input';
import TextArea from '../inputs/TextArea';

import { DesignDescriptionProps } from '@/types';

const DesignDescription = ({
  phone,
  subject,
  desc,
  errors,
  onChange,
}: DesignDescriptionProps) => {
  return (
    <>
      <Heading
        title='Describe your design ideas'
        subtitle='What inspired the design(s)?'
      />
      <Input
        type='tel'
        name='phone'
        label='Phone'
        value={phone}
        placeholder='Phone'
        onChange={onChange}
        error={errors.phone}
      />
      <Input
        name='subject'
        label='Subject'
        value={subject}
        placeholder='Subject'
        onChange={onChange}
        error={errors.subject}
      />
      <TextArea
        name='desc'
        value={desc}
        label='Description'
        placeholder='Description'
        onChange={onChange}
        error={errors.desc}
      />
    </>
  );
};

export default DesignDescription;
