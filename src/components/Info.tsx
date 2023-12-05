'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import { infoContacts, socialIcons } from '@/data';
import { useActiveMode } from '@/hooks/useActiveMode';

import InfoIcon from './icons/InfoIcon';
import InfoContact from './contacts/InfoContact';

interface IMode {
  mode: string;
}

const Info = () => {
  const { activeMode } = useActiveMode();

  return (
    <Container mode={activeMode}>
      <Wrapper>
        {infoContacts.map((item) => {
          return <InfoContact key={item.id} {...item} />;
        })}
      </Wrapper>
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

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;

  @media only screen and (max-width: 25em) {
    gap: 3rem;
  }
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

const SocialWrapper = styled.div`
  /* align-self: center;
  justify-self: self-end; */

  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export default Info;
