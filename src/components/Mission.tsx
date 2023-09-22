'use client';

import styled from 'styled-components';

const Mission = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Custom designs</Heading>
        <Text>
          We are a Creative Design, Brand development and activation firm. We
          aim to present brands in grand style. Focusing on each drop in a
          massive rainfall is a way of life to us.
        </Text>
        <Text>
          We treat every details with caution to set your brand in motion of
          excellence.
        </Text>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  grid-column: col-start 5 / full-end;
  background-color: var(--clr-purple-dark-2);
  color: var(--clr-white);
`;

const Wrapper = styled.div``;

const Heading = styled.h2``;

const Text = styled.p``;

export default Mission;
