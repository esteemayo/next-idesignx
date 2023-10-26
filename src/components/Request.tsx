'use client';

import styled from 'styled-components';
import { ChangeEvent, useCallback, useState } from 'react';

import FormTextArea from './inputs/FormTextArea';
import FormInput from './inputs/FormInput';
import UploadInput from './inputs/UploadInput';
import FormSelect from './inputs/FormSelect';

import Form from './form/Form';
import Button from './buttons/Button';

import { selectInputs } from '@/data/formData';

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
        <FormInput
          name='name'
          type='text'
          label='Your name'
          value={data.name}
          placeholder='Your name'
          onChange={handleChange}
          path='design'
        />
        <FormInput
          name='email'
          type='email'
          label='Email'
          value={data.email}
          placeholder='Email'
          onChange={handleChange}
          path='design'
        />
        <FormInput
          name='phone'
          type='tel'
          label='Phone number'
          value={data.phone}
          placeholder='Phone number'
          onChange={handleChange}
          path='design'
        />
        <FormSelect
          name='category'
          value={data.category}
          label='Select Category'
          options={selectInputs}
          onChange={handleChange}
          path='design'
        />
        <FormTextArea
          name='comment'
          label='Comment Here'
          value={data.comment}
          placeholder='Comment Here'
          onChange={handleChange}
          path='design'
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
  color: ${({ theme }) => theme.text};
  margin-bottom: 3rem;

  @media only screen and (max-width: 50em) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 37.5em) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 20em) {
    font-size: 1.5rem;
  }
`;

export default Request;
