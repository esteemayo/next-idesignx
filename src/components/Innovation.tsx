'use client';

import styled from 'styled-components';

import { CommonImage } from './common/CommonImage';

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
  display: flex;
  align-items: center;
  justify-content: end;

  @media only screen and (max-width: 37.5em) {
    grid-row: 3 / 4;
    grid-column: full-start / full-end;
    justify-content: start;
  }

  background-color: ${({ theme }) => theme.bg};
`;

const ImageWrapper = styled.div`
  width: 60rem;
  height: 45rem;

  @media only screen and (max-width: 31.25em) {
    width: 50rem;
  }
`;

const StyledImage = styled(CommonImage)``;

export default Innovation;
