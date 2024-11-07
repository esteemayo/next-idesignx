'use client';

import styled, { css } from 'styled-components';

import InfoIcon from './icons/InfoIcon';
import InfoContact from './contacts/InfoContact';

import { infoContacts, socialIcons } from '@/data';
import { useActiveMode } from '@/hooks/useActiveMode';

interface IMode {
  mode: string;
}

const Info = () => {
  const { activeMode } = useActiveMode();

  return (
    <Container mode={activeMode}>
      <Wrapper>
        <InfoWrap>
          {infoContacts.map((item) => {
            return <InfoContact key={item.id} {...item} />;
          })}
        </InfoWrap>
        <Box>
          {socialIcons.map((item) => {
            return <InfoIcon key={item.id} mode={activeMode} {...item} />;
          })}
        </Box>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div<IMode>`
  display: flex;
  justify-content: center;

  padding: 1.5rem 0;
  background-color: ${({ mode }) =>
    mode === 'true' && 'var(--clr-bg-dark-secondary)'};
  color: var(--clr-white);
  background-image: ${({ mode }) =>
    mode === 'false' &&
    css`
  linear-gradient(
    to right bottom,
    var(--clr-purple-dark-1),
    var(--clr-purple-light-1),
    var(--clr-purple-light-2),
    var(--clr-purple-light-3)
  )
  `};

  @media only screen and (min-width: 112.5em) {
    padding: 1.7rem 0;
  }

  @media only screen and (min-width: 125em) {
    padding: 2rem 0;
  }
`;

const Wrapper = styled.div`
  width: 144rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 87.5em) {
    width: 130rem;
  }

  @media only screen and (max-width: 81.25em) {
    width: 120rem;
  }

  @media only screen and (max-width: 76.25em) {
    width: 115rem;
  }

  @media only screen and (max-width: 64em) {
    width: 105rem;
  }

  @media only screen and (max-width: 59.375em) {
    width: 100rem;
  }

  @media only screen and (max-width: 57.5em) {
    width: 95rem;
  }

  @media only screen and (max-width: 50em) {
    width: 90rem;
  }

  @media only screen and (max-width: 46.875em) {
    width: 85rem;
  }

  @media only screen and (max-width: 43.75em) {
    width: 80rem;
  }

  @media only screen and (max-width: 40.625em) {
    width: 75rem;
  }

  @media only screen and (max-width: 37.5em) {
    width: 70rem;
  }

  @media only screen and (max-width: 35.625em) {
    width: 65rem;
  }

  @media only screen and (max-width: 33.75em) {
    width: 60rem;
  }

  @media only screen and (max-width: 31.25em) {
    width: 55rem;
  }

  @media only screen and (max-width: 28.125em) {
    width: 50rem;
  }

  @media only screen and (max-width: 26.25em) {
    width: 45rem;
  }

  @media only screen and (max-width: 23.4375em) {
    width: 40rem;
  }

  @media only screen and (max-width: 20.625em) {
    width: 35rem;
  }

  @media only screen and (max-width: 18.125em) {
    width: 33rem;
  }

  @media only screen and (min-width: 112.5em) {
    width: 135rem;
  }

  @media only screen and (min-width: 125em) {
    width: 150rem;
  }
`;

const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;

  @media only screen and (max-width: 34.375em) {
    gap: 4rem;
  }

  @media only screen and (max-width: 31.25em) {
    gap: 2rem;
  }

  @media only screen and (max-width: 26.25em) {
    width: 100%;
    justify-content: space-between;
  }

  @media only screen and (max-width: 18.25em) {
    gap: 1rem;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media only screen and (max-width: 26.25em) {
    display: none;
  }
`;

export default Info;
