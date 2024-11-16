'use client';

import Heading from '../Heading';

import Select from '../inputs/Select';
import UploadInput from '../inputs/UploadInput';

const RegisterAvatar = ({ gender, options, error, onChange, onChangeFile }) => {
  return (
    <>
      <Heading title='Welcome to iDesignx' subtitle='Create an account!' />
      <Select
        name='gender'
        value={gender}
        label='Gender'
        options={options}
        onChange={onChange}
        error={error}
      />
      <UploadInput id='file' label='Upload avatar' onChange={onChangeFile} />
    </>
  );
};

export default RegisterAvatar;
