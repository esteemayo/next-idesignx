'use client';

import styled, { css } from 'styled-components';
import { useActiveMode } from '@/hooks/useActiveMode';

interface IContainer {
  mode: string;
}

const Mission = () => {
  const { activeMode } = useActiveMode();

  return (
    <Container mode={activeMode}>
      <Wrapper>
        <Heading>Custom designs</Heading>
        <Text>
          We are a Creative Design, Brand development and activation firm. We
          aim to present brands in grand style. Focusing on each drop in a
          massive rainfall is a way of life to us.
        </Text>
        <Paragraph>
          We treat every details with caution to set your brand in motion of
          excellence. We offer you the easiest way to get your materials printed
          without breaking a sweat!
        </Paragraph>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section<IContainer>`
  grid-column: col-start 5 / full-end;

  @media only screen and (max-width: 37.5em) {
    grid-row: 2 / 3;
    grid-column: full-start / full-end;
  }

  padding: 3rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.textDesign};
  /* color: var(--clr-white); */
  /* background-color: ${({ mode }) =>
    mode === 'true' && 'var(--clr-bg-dark-tertiary)'};
  background-image: ${({ mode }) =>
    mode === 'false' &&
    css`
  linear-gradient(
    to bottom,
    var(--clr-purple-light-1),
    var(--clr-purple-dark-1),
    var(--clr-purple-light-2),
    var(--clr-purple-dark-2)
  )
  `}; */
`;

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  gap: 2rem;
  align-items: center;

  @media only screen and (max-width: 37.5em) {
    grid-template-rows: repeat(5, 1fr);
  }

  @media only screen and (max-width: 25em) {
    grid-template-rows: repeat(3, 7rem);
  }
`;

const Heading = styled.h2`
  grid-row: 2 / 3;
  align-self: self-start;

  font-weight: 400;
  font-size: 4rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.text};
  letter-spacing: 0.5px;
  line-height: 1;

  @media only screen and (max-width: 50em) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 43.75em) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 37.5em) {
    font-size: 2.8rem;
    letter-spacing: 3px;
  }

  @media only screen and (max-width: 25em) {
    grid-row: 1 / 2;
    align-self: center;
  }

  @media only screen and (max-width: 20em) {
    font-size: 2rem;
    letter-spacing: 0.5px;
  }
`;

const Text = styled.p`
  grid-row: 3 / 4;
  width: 75%;
  text-align: justify;
  font-size: 100%;
  letter-spacing: 0.5px;

  @media only screen and (max-width: 56.25em) {
    width: 90%;
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 43.75em) {
    width: 100%;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 1.9rem;
  }

  @media only screen and (max-width: 25em) {
    grid-row: 3 / 4;
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 20em) {
    font-size: 1.3rem;
  }
`;

const Paragraph = styled.p`
  grid-row: 4 / 5;
  width: 75%;
  text-align: justify;
  font-size: 100%;
  letter-spacing: 0.5px;

  @media only screen and (max-width: 56.25em) {
    width: 90%;
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 43.75em) {
    width: 100%;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 1.9rem;
  }

  @media only screen and (max-width: 25em) {
    grid-row: 3 / 4;
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 20em) {
    font-size: 1.3rem;
  }
`;

export default Mission;
