'use client';

import styled from 'styled-components';

const Location = () => {
  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
};

const Container = styled.section`
  grid-column: col-start 5 / col-end 8;
  background-color: yellowgreen;
`;

const Wrapper = styled.div``;

export default Location;
