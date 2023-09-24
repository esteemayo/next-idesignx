'use client';

import styled from 'styled-components';

const Location = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Our location</Heading>
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

export default Location;
