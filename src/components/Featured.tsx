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
  background-color: var(--clr-white);

  display: grid;
  grid-template-rows: 0.5fr repeat(6, 1fr) 0.5fr;
  grid-template-columns: 0.5fr repeat(6, 1fr) 0.5fr;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export default Featured;
