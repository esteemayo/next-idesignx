'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import Icon from './Icon';

const Info = () => {
  return (
    <Container>
      <PhoneWrapper>
        <FontAwesomeIcon icon={faPhone} />
        <PhoneNumber>+2348136119251</PhoneNumber>
      </PhoneWrapper>
      <EmailWrapper>
        <FontAwesomeIcon icon={faEnvelope} />
        <EmailAddress>esteemdesign19@gmail.com</EmailAddress>
      </EmailWrapper>
      <SocialWrapper>
        <StyledLink href='#'>
          <Icon icon='facebook' />
        </StyledLink>
        <StyledLink href='#'>
          <Icon icon='twitter' />
        </StyledLink>
        <StyledLink href='#'>
          <Icon icon='instagram' />
        </StyledLink>
      </SocialWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content) minmax(min-content, 1fr);
  gap: 6rem;
  align-items: center;
  justify-items: center;

  background-image: linear-gradient(
    to right bottom,
    var(--clr-purple-dark-1),
    var(--clr-purple-light-1),
    var(--clr-purple-light-2),
    var(--clr-purple-light-3)
  );
  font-size: 1.4rem;
  padding: 1.5rem;
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

  width: 1.3rem;
  height: 1.3rem;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media only screen and (max-width: 25em) {
    width: 1rem;
    height: 1rem;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: currentColor;
  outline-color: var(--clr-purple-light-3);

  &:hover,
  &:active {
    color: currentColor;
  }

  svg {
    fill: currentColor;
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export default Info;
