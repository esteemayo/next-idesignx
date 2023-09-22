'use client';

import styled from 'styled-components';
import { useCallback } from 'react';

import Form from './form/Form';

const Request = () => {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <Container>
      <Heading>Fill in your requests</Heading>
      <Form onSubmit={handleSubmit}></Form>
    </Container>
  );
};

const Container = styled.section`
  grid-column: center-start / center-end;
`;

const Heading = styled.h3``;

export default Request;
