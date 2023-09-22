'use client';

import styled from 'styled-components';
import { useCallback, useState } from 'react';

import Form from './form/Form';
import Input from './inputs/Input';

const Request = () => {
  const [data, setData] = useState({});

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
      </Form>
    </Container>
  );
};

const Container = styled.section`
  grid-column: center-start / center-end;
`;

const Heading = styled.h3``;

export default Request;
