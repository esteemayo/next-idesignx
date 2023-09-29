'use client';

import Image from 'next/image';
import styled from 'styled-components';

const SeenOn = () => {
  return (
    <Container>
      <Text>As seen on</Text>
      <LogoContainer>
        <StyledImage src='/img/access.jpg' width={80} height={50} alt='' />
        <StyledImage
          src='/img/Stanbic-Bank-Logo.jpg'
          width={80}
          height={50}
          alt=''
        />
        <StyledImage src='/img/zenith.png' width={80} height={50} alt='' />
        <StyledImage src='/img/union-bank.jpg' width={80} height={50} alt='' />
        <StyledImage src='/img/first-bank.png' width={80} height={50} alt='' />
      </LogoContainer>
    </Container>
  );
};

const Container = styled.section`
  grid-column: center-start / center-end;
  background-color: var(--clr-white);
  margin-top: -14rem;

  @media only screen and (max-width: 56.25em) {
    grid-column: full-start / full-end;
    margin: 5rem;
    margin-bottom: -5rem;
  }

  @media only screen and (max-width: 50em) {
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 18.75em) {
    margin-bottom: 0;
  }
`;

const Text = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  gap: 2vw;
  align-items: center;
  color: var(--clr-purple-light-1);

  &::before,
  &::after {
    content: '';
    display: block;
    height: 1px;
    background-color: currentColor;
  }
`;

const LogoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(min-content, 1fr));
  gap: 1rem;
  align-items: center;
  justify-items: center;
`;

const StyledImage = styled(Image)`
  max-width: 100%;
  max-height: 5rem;
  object-fit: contain;
`;

export default SeenOn;
