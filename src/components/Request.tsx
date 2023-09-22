'use client';

import styled from 'styled-components';
import { useCallback } from 'react';

import Form from './form/Form';
import Input from './inputs/Input';

const Request = () => {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <Container>
      <Heading>Fill in your requests</Heading>
      <Form onSubmit={handleSubmit}>
        <Input name='name' label='Your name' placeholder='Your name' />
        <Input name='email' type='email' label='Email' placeholder='Email' />
        <Input
          name='phone'
          type='tel'
          label='Phone number'
          placeholder='Phone number'
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
