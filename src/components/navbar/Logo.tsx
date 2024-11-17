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
  height: auto;

  @media only screen and (max-width: 48em) {
    height: 4rem;
  }

  @media only screen and (max-width: 25em) {
    height: 3.5rem;
  }

  @media only screen and (min-width: 112.5em) {
    width: 5rem;
    height: auto;
  }

  @media only screen and (min-width: 125em) {
    width: 5.5rem;
  }
`;

export default Logo;
