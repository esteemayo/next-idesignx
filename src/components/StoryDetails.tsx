'use client';

import styled from 'styled-components';

const StoryDetails = () => {
  return (
    <Container>
      <Heading>Who are we</Heading>
    </Container>
  );
};

const Container = styled.section`
  grid-column: col-start 1 / col-end 4;
  background-color: orangered;
`;

const Heading = styled.h2``;

export default StoryDetails;
