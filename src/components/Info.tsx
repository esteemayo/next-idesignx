'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useMemo } from 'react';

import { socialIcons } from '@/data';
import { useDarkMode } from '@/hooks/useDarkMode';

interface IMode {
  mode: string;
}

const Info = () => {
  const mode = useDarkMode((state) => state.mode);

  const activeMode = useMemo(() => {
    return mode.toString();
  }, [mode]);

  return (
    <Container mode={activeMode}>
      <PhoneWrapper>
        <FontAwesomeIcon icon={faPhone} />
        <PhoneNumber>+2348136119251</PhoneNumber>
      </PhoneWrapper>
      <EmailWrapper>
        <FontAwesomeIcon icon={faEnvelope} />
        <EmailAddress>esteemdesign19@gmail.com</EmailAddress>
      </EmailWrapper>
      <SocialWrapper>
        {socialIcons.map((item) => {
          const { id, url, icon: Icon } = item;
          return (
            <StyledLink key={id} href={url} mode={activeMode}>
              <Icon />
            </StyledLink>
          );
        })}
      </SocialWrapper>
    </Container>
  );
};

const Container = styled.div<IMode>`
  height: 7rem;
  display: grid;
  grid-template-columns: repeat(2, max-content) minmax(min-content, 1fr);
  gap: 6rem;
  align-items: center;
  justify-items: center;

  @media only screen and (max-width: 25em) {
    gap: 3rem;
  }

  font-size: 1.4rem;
  padding: 1.5rem;
  background-color: ${({ mode }) => mode === 'true' && '#101418'};
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
  color: var(--clr-white);
`;

const PhoneWrapper = styled.div`
  grid-column: 1 / 2;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 1.3rem;
    color: currentColor;
  }
`;

const PhoneNumber = styled.span``;

const EmailWrapper = styled.div`
  grid-column: 2 / 3;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 1.3rem;
    color: currentColor;
  }
`;

const EmailAddress = styled.span``;

const SocialWrapper = styled.div`
  align-self: center;
  justify-self: self-end;

  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledLink = styled(Link)<IMode>`
  display: inline-block;
  text-decoration: none;
  color: currentColor;
  outline-color: var(--clr-purple-light-3);
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:active {
    display: ${({ mode }) => (mode === 'true' ? 'flex' : undefined)};
    align-items: ${({ mode }) => (mode === 'true' ? 'center' : undefined)};
    justify-content: ${({ mode }) => (mode === 'true' ? 'center' : undefined)};
    width: 3rem;
    height: 3rem;
    background-color: ${({ mode }) =>
      mode === 'true' ? '#1c2127' : undefined};
    color: currentColor;
    border-radius: ${({ mode }) => (mode === 'true' ? '50%' : undefined)};
  }

  svg {
    font-size: 2rem;
    fill: currentColor;
  }
`;

export default Info;
