'use client';

import Heading from '../Heading';

import Select from '../inputs/Select';
import ImageUpload from '../inputs/ImageUpload';

import { DesignImagesProps } from '@/types';

const DesignImages = ({
  category,
  files,
  options,
  error,
  onChange,
  onChangeFiles,
}: DesignImagesProps) => {
  return (
    <>
      <Heading
        title='Upload your design images'
        subtitle='Show us what your designs looks like!'
      />
      <Select
        name='category'
        value={category}
        label='Select a category'
        options={options}
        onChange={onChange}
        error={error}
      />
      <ImageUpload value={files} onChange={onChangeFiles} />
    </>
  );
};

export default DesignImages;
