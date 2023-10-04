'use client';

import styled from 'styled-components';

const DarkMode = () => {
  return <Container>DarkMode</Container>;
};

const Container = styled.div`
  width: 20rem;
  height: fit-content;
  padding: 2.5rem;
  background-color: hsl(277, 94%, 87%);
  color: var(--clr-white);
  position: absolute;
  right: 3rem;
  bottom: 10rem;
`;

export default DarkMode;
