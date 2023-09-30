'use client';

import styled from 'styled-components';
import { ChangeEvent, useCallback, useState } from 'react';

import Select from './inputs/Select';
import UploadInput from './inputs/UploadInput';
import Input from './inputs/Input';
import TextArea from './inputs/TextArea';

import Form from './form/Form';
import Button from './buttons/Button';

import { selectInputs } from '@/formData';

const initialState = {
  name: '',
  email: '',
  phone: '',
  category: '',
  comment: '',
};

const Request = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(initialState);

  const handleChange = useCallback(
    ({ target: input }: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = input;
      setData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleClear = useCallback(() => {
    setData(initialState);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log({ ...data, file });
      handleClear();
    },
    [data, file, handleClear]
  );

  return (
    <Container>
      <Heading>Fill in your requests</Heading>
      <Form onSubmit={handleSubmit}>
        <Input
          name='name'
          label='Your name'
          value={data.name}
          placeholder='Your name'
          style='true'
          onChange={handleChange}
        />
        <Input
          name='email'
          type='email'
          label='Email'
          value={data.email}
          placeholder='Email'
          style='true'
          onChange={handleChange}
        />
        <Input
          name='phone'
          type='tel'
          label='Phone number'
          value={data.phone}
          placeholder='Phone number'
          style='true'
          onChange={handleChange}
        />
        <Select
          name='category'
          value={data.category}
          label='Select Category'
          options={selectInputs}
          style='true'
          onChange={handleChange}
        />
        <TextArea
          name='comment'
          label='Comment Here'
          value={data.comment}
          placeholder='Comment Here'
          style='true'
          onChange={handleChange}
        />
        <UploadInput
          id='file'
          label='Attach a sample'
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFile(e.target.files[0])
          }
        />
        <Button label='Send request' />
      </Form>
    </Container>
  );
};

const Container = styled.section`
  grid-column: col-start 2 / col-end 7;
  padding: 5rem;
  margin: 8rem 0;

  @media only screen and (max-width: 37.5em) {
    grid-column: full-start / full-end;
    margin: 0;
  }

  @media only screen and (max-width: 25em) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const Heading = styled.h3`
  font-weight: 400;
  font-size: 3rem;
  color: var(--clr-purple-light-1);
  margin-bottom: 3rem;

  @media only screen and (max-width: 50em) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 37.5em) {
    font-size: 2rem;
  }
`;

export default Request;
