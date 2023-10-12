'use client';

import Image from 'next/image';
import styled from 'styled-components';

const Innovation = () => {
  return (
    <Container>
      <ImageWrapper>
        <StyledImage
          src='/img/innovative.png'
          width={577}
          height={432}
          alt=''
        />
      </ImageWrapper>
    </Container>
  );
};

const Container = styled.section`
  grid-column: full-start / col-end 4;
`;

const ImageWrapper = styled.div`
  width: 60rem;
  height: 45rem;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

export default Innovation;
