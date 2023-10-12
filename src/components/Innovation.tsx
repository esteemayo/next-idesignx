'use client';

import Image from 'next/image';
import styled from 'styled-components';

const Innovation = () => {
  return (
    <Container>
      <ImageWrapper>
        <StyledImage src='/img/innovative.pg' width={577} height={432} alt='' />
      </ImageWrapper>
    </Container>
  );
};

const Container = styled.section`
  grid-column: full-start / full-end;
`;

const ImageWrapper = styled.div``;

const StyledImage = styled(Image)``;

export default Innovation;
