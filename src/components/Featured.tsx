'use client';

import Image from 'next/image';
import styled from 'styled-components';

const Featured = () => {
  return (
    <Container>
      <StyledImage src='/img/woman-3.jpg' width={735} height={549} alt='' />
    </Container>
  );
};

const Container = styled.section`
  grid-column: full-start / col-end 4;
  display: grid;
  grid-template-rows: 0.5fr repeat(6, 1fr) 0.5fr;
  grid-template-columns: 0.5fr repeat(6, 1fr) 0.5fr;

  background-color: var(--clr-white);

  @media only screen and (max-width: 37.5em) {
    display: none;
    opacity: 0;
    visibility: hidden;
    position: relative;
    z-index: -1;
  }
`;

const StyledImage = styled(Image)`
  grid-area: 2 / 1 / 8 / 8;

  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 50%;
`;

export default Featured;
