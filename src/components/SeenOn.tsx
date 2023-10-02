'use client';

import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

import { brands } from '@/data';

const SeenOn = () => {
  return (
    <Container>
      <Text>As seen on</Text>
      <Wrapper>
        {brands.map((item) => {
          const { id, img } = item;
          return (
            <LogoContainer key={id}>
              <StyledImage src={img} width={80} height={50} alt='' />
            </LogoContainer>
          );
        })}
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  grid-column: center-start / center-end;
  background-color: transparent;
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

const ScrollX = keyframes`
  from {
    left: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* gap: 0.5rem; */
  animation: ${ScrollX} 10s linear infinite;

  /* display: grid;
  grid-template-columns: repeat(5, minmax(min-content, 1fr));
  gap: 1rem;
  align-items: center;
  justify-items: center;
  animation: ${ScrollX} 10s linear infinite; */
`;

const LogoContainer = styled.div`
  padding: 0.5rem 1rem;
  /* background-color: rgba(224, 192, 243, 0.3); */
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 0.5rem;
  /* box-shadow: rgba(0, 0, 0, 0.09) 0 1px 0.5rem 0; */
`;

const StyledImage = styled(Image)`
  max-width: 5rem;
  max-height: 5rem;
  object-fit: contain;
`;

export default SeenOn;
