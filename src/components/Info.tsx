'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import { socialIcons } from '@/data';
import { useActiveMode } from '@/hooks/useActiveMode';

import InfoIcon from './icons/InfoIcon';

interface IMode {
  mode: string;
}

const Info = () => {
  const { activeMode } = useActiveMode();

  return (
    <Container mode={activeMode}>
      <PhoneWrapper>
        <FontAwesomeIcon icon={faPhone} />
        <PhoneNumber>(+234) 813 611 9251</PhoneNumber>
      </PhoneWrapper>
      <EmailWrapper>
        <FontAwesomeIcon icon={faEnvelope} />
        <EmailAddress>esteemdesign19@gmail.com</EmailAddress>
      </EmailWrapper>
      <SocialWrapper>
        {socialIcons.map((item) => {
          return <InfoIcon key={item.id} mode={activeMode} {...item} />;
        })}
      </SocialWrapper>
    </Container>
  );
};

const Container = styled.div<IMode>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* display: grid;
  grid-template-columns: repeat(2, max-content) minmax(min-content, 1fr);
  gap: 6rem;
  align-items: center;
  justify-items: center; */

  /* @media only screen and (max-width: 25em) {
    gap: 3rem;
  } */

  font-size: 1.4rem;
  padding: 1.5rem;
  background-color: ${({ mode }) =>
    mode === 'true' && 'var(--clr-bg-dark-secondary)'};
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
  gap: 0.5rem;

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
  gap: 0.5rem;
`;

export default Info;
