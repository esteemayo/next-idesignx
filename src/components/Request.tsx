'use client';

import styled from 'styled-components';

const Request = () => {
  return (
    <Container>
      <Heading>Fill in your requests</Heading>
    </Container>
  );
};

const Container = styled.section`
  grid-column: center-start / center-end;
`;

const Heading = styled.h3``;

export default Request;
