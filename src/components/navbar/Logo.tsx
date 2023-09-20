'use client';

import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';

const Logo = () => {
  return (
    <Container>
      <StyledLink href='/'>
        <StyledImage src='/img/logo.png' width={45} height={45} alt='logo' />
      </StyledLink>
    </Container>
  );
};

const Container = styled.div`
  justify-self: start;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledImage = styled(Image)`
  width: 4.5rem;
  height: 4.5rem;
`;

export default Logo;
