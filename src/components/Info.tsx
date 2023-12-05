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

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  margin-right: 0.5rem;
`;

export default Info;
