'use client';

import Image from 'next/image';
import styled from 'styled-components';

const Featured = () => {
  return <Container>Featured</Container>;
};

const Container = styled.section`
  grid-column: full-start / col-end 4;
  background-color: var(--clr-white);
`;

const StyledImage = styled(Image)``;

export default Featured;
