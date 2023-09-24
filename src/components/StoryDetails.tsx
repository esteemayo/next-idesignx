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
  background-color: orangered;
`;

const Heading = styled.h2``;

const Text = styled.p``;

export default StoryDetails;
