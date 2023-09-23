'use client';

import styled from 'styled-components';

const Prints = () => {
  return <Container>Prints</Container>;
};

const Container = styled.main`
  display: grid;
  grid-template-rows: 70vh repeat(2, min-content);
  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start]repeat(
      8,
      [col-start] minmax(min-content, 15rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];
`;

export default Prints;
