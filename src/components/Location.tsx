'use client';

import styled from 'styled-components';

const Location = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Our location</Heading>
        <Text>
          123 Lagos street, Lagos <Br />
          state, Lagos Nigeria
        </Text>
      </Wrapper>
      <Wrapper>
        <Heading>Email</Heading>
        <Text>project@xteemdesigns.com</Text>
        <Text>esteemdesign19@gmail.com</Text>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  grid-column: col-start 5 / col-end 8;
  background-color: yellowgreen;
`;

const Wrapper = styled.div``;

const Heading = styled.h3``;

const Text = styled.p``;

const Br = styled.br``;

export default Location;
