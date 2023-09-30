'use client';

import styled from 'styled-components';

const StoryDetails = () => {
  return (
    <Container>
      <Heading>Who are we</Heading>
      <Text>
        We are a Creative Design, Brand Development and activation firm. We aim
        to present brands in grand style. Focusing on each drop in a massive
        rainfall is a way of life to us, we treat every details with caution to
        set your brand in motion of excellence.
      </Text>
      <Text>
        We treat every details with caution to set your brand in motion of
        excellence.
      </Text>
    </Container>
  );
};

const Container = styled.section`
  grid-column: col-start 1 / col-end 4;
  display: grid;
  align-content: center;

  margin: 10rem 0;
  padding: 4.5rem;
`;

const Heading = styled.h2`
  font-weight: 400;
  font-size: 4rem;
  text-transform: capitalize;
  color: var(--clr-purple-light-1);
  letter-spacing: 1px;
  line-height: 1;
  margin-bottom: 3rem;
`;

const Text = styled.p`
  letter-spacing: 2px;

  &:not(:last-child) {
    margin-bottom: 4rem;
  }
`;

export default StoryDetails;
