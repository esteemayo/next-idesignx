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
      <LogoBox></LogoBox>
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

const Wrapper = styled.div`
  margin-bottom: 3rem;
`;

const Heading = styled.h3`
  text-transform: capitalize;
  font-weight: lighter;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1.8rem;
`;

const Br = styled.br``;

const LogoBox = styled.div``;

export default Location;
