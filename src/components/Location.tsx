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
      <Wrapper>
        <Heading>Phone number</Heading>
        <Text>+2348136119251</Text>
        <Text>+2349134211583</Text>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  grid-column: col-start 5 / col-end 8;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background-color: yellowgreen;
  color: var(--clr-white);
  margin: 15rem 0;
  padding: 5rem;
  line-height: 1.4;
  border-radius: 3px;
`;

const Wrapper = styled.div``;

const Heading = styled.h3``;

const Text = styled.p``;

const Br = styled.br``;

export default Location;
