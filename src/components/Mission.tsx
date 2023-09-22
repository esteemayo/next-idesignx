'use client';

import styled from 'styled-components';

const Mission = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Custom designs</Heading>
        <Text>
          We offer you the easiest way to get your <br />
          materials printed without breaking a sweat!
        </Text>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  grid-column: col-start 5 / full-end;
  background-color: var(--clr-purple-dark-2);
`;

const Wrapper = styled.div``;

const Heading = styled.h2``;

const Text = styled.p``;

export default Mission;
