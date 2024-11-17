'use client';

import Link from 'next/link';
import styled from 'styled-components';

import { CommonImage } from '../common/CommonImage';

interface LogoProps {
  onClose?: () => void;
}

const Logo = ({ onClose }: LogoProps) => {
  return (
    <Container onClick={onClose}>
      <StyledLink href='/'>
        <StyledImage
          src='/svg/idesignx.svg'
          width={45}
          height={45}
          alt='logo'
        />
      </StyledLink>
    </Container>
  );
};

const Container = styled.div`
  justify-self: start;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  outline-color: ${({ theme }) => theme.outline};
`;

const StyledImage = styled(CommonImage)`
  width: 4.5rem;
  width: 17rem;
  height: 4.5rem;

  @media only screen and (max-width: 56.25em) {
    width: 18rem;
    height: 4.75rem;
  }

  @media only screen and (max-width: 50em) {
    width: 19rem;
    height: 5rem;
  }

  @media only screen and (max-width: 34.375em) {
    width: 18.5rem;
  }

  @media only screen and (max-width: 31.25em) {
    width: 17.5rem;
  }

  @media only screen and (max-width: 26.875em) {
    width: 16rem;
    height: 4rem;
    margin-left: -2rem;
  }

  @media only screen and (max-width: 25em) {
    width: 15rem;
    height: 3.75rem;
    margin-left: -2.5rem;
  }

  @media only screen and (max-width: 21.5em) {
    width: 14rem;
    height: 3.5rem;
    margin-left: -2.25rem;
  }

  @media only screen and (min-width: 106.25em) {
    width: 5rem;
    width: 18rem;
  }

  @media only screen and (min-width: 112.5em) {
    width: 5rem;
    width: 20rem;
    height: auto;
    height: 5rem;
  }

  @media only screen and (min-width: 125em) {
    width: 5.5rem;
    width: 24rem;
    height: 6rem;
  }
`;

export default Logo;
