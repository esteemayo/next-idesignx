'use client';

import styled from 'styled-components';
import { useCallback, useState } from 'react';

import UploadInput from './inputs/UploadInput';
import FormInput from './inputs/FormInput';
import FormTextArea from './inputs/FormTextArea';
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
  const [file, setFile] = useState<File>();
  const [data, setData] = useState(initialState);

  const { name, email, phone, category, comment } = data;

  const handleChange = useCallback(
    ({
      target: input,
    }: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >) => {
      const { name, value } = input;
      setData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const selectedFile = files as FileList;
    setFile(selectedFile?.[0]);
  }, []);

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
          value={name}
          placeholder='Your name'
          onChange={handleChange}
          path='design'
        />
        <FormInput
          name='email'
          type='email'
          label='Email'
          value={email}
          placeholder='Email'
          onChange={handleChange}
          path='design'
        />
        <FormInput
          name='phone'
          type='tel'
          label='Phone number'
          value={phone}
          placeholder='Phone number'
          onChange={handleChange}
          path='design'
        />
        <FormSelect
          name='category'
          value={category}
          label='Select Category'
          options={selectInputs}
          onChange={handleChange}
          path='design'
        />
        <FormTextArea
          name='comment'
          label='Comment Here'
          value={comment}
          placeholder='Comment Here'
          onChange={handleChange}
          path='design'
        />
        <UploadInput id='file' label='Attach a sample' onChange={handleFile} />
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

  @media only screen and (max-width: 56.25em) {
    font-size: 3.1rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 3.2rem;
  }

  @media only screen and (max-width: 37.5em) {
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 3.3rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 3.1rem;
  }

  @media only screen and (max-width: 20em) {
    font-size: 2.5rem;
  }

  @media only screen and (min-width: 106.25em) {
    font-size: 3.2rem;
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 3.5rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 4rem;
  }
`;

export default Request;
