'use client';

import styled from 'styled-components';
import { useCallback, useState } from 'react';

import Select from './inputs/Select';
import UploadInput from './inputs/UploadInput';
import Input from './inputs/Input';
import TextArea from './inputs/TextArea';

import Form from './form/Form';
import Button from './buttons/Button';

import { selectInputs } from '@/formData';

const Request = () => {
  const [data, setData] = useState({});
  const [file, setFile] = useState(null);

  const handleChange = useCallback(({ target: input }) => {
    const { name, value } = input;
    setData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <Container>
      <Heading>Fill in your requests</Heading>
      <Form onSubmit={handleSubmit}>
        <Input
          name='name'
          label='Your name'
          placeholder='Your name'
          onChange={handleChange}
        />
        <Input
          name='email'
          type='email'
          label='Email'
          placeholder='Email'
          onChange={handleChange}
        />
        <Input
          name='phone'
          type='tel'
          label='Phone number'
          placeholder='Phone number'
          onChange={handleChange}
        />
        <Select
          name='category'
          label='Select Category'
          options={selectInputs}
          onChange={handleChange}
        />
        <TextArea
          name='comment'
          label='Comment Here'
          placeholder='Comment Here'
          onChange={handleChange}
        />
        <UploadInput
          id='file'
          label='Attach a sample'
          onChange={(e) => setFile(e.target.files[0])}
        />
        <Button label='Send request' />
      </Form>
    </Container>
  );
};

const Container = styled.section`
  grid-column: center-start / center-end;
  padding: 5rem;
  margin: 8rem 0;
`;

const Heading = styled.h3`
  font-weight: 400;
  font-size: 3rem;
  text-transform: capitalize;
  text-align: center;
  color: var(--clr-purple-light-1);
  margin-bottom: 3rem;
`;

export default Request;
