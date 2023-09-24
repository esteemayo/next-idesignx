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
  margin: 10rem 0;
  padding: 4.5rem;

  display: grid;
  align-content: center;
`;

const Heading = styled.h2`
  font-weight: 400;
  font-size: 4rem;
`;

const Text = styled.p``;

export default StoryDetails;
