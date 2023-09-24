'use client';

import Link from 'next/link';
import styled, { css } from 'styled-components';

const Location = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Our location</Heading>
        <Text>
          123 Lagos street, Lagos <Br />
          state, Lagos Nigeria
        </Text>
      </Wrapper>
      <Wrapper>
        <Heading>Email</Heading>
        <Text>project@xteemdesigns.com</Text>
        <Text>esteemdesign19@gmail.com</Text>
      </Wrapper>
      <Wrapper>
        <Heading>Phone number</Heading>
        <Text>+2348136119251</Text>
        <Text>+2349134211583</Text>
      </Wrapper>
      <LogoBox>
        <StyledLink href='#'>
          <Logo icon='facebook'>&nbsp;</Logo>
        </StyledLink>
      </LogoBox>
      <LogoBox>
        <StyledLink href='#'>
          <Logo icon='twitter'>&nbsp;</Logo>
        </StyledLink>
      </LogoBox>
      <LogoBox>
        <StyledLink href='#'>
          <Logo icon='instagram'>&nbsp;</Logo>
        </StyledLink>
      </LogoBox>
    </Container>
  );
};

const Container = styled.section`
  grid-column: col-start 5 / col-end 8;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background-color: yellowgreen;
  color: var(--clr-white);
  margin: 15rem 0;
  padding: 5rem;
  line-height: 1.4;
  border-radius: 3px;
`;

const Wrapper = styled.div`
  margin-bottom: 3rem;
`;

const Heading = styled.h3`
  text-transform: capitalize;
  font-weight: lighter;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1.8rem;
`;

const Br = styled.br``;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.span`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-image: ${({ icon }) =>
    icon === 'instagram' &&
    css`
  linear-gradient(
    to bottom left,
    #8134af,
    #dd2a7b,
    #feda77
  )
  `};
  background-color: ${({ icon }) =>
    icon === 'facebook' ? 'var(--clr-facebook)' : undefined};
  background-color: ${({ icon }) =>
    icon === 'twitter' ? 'var(--clr-twitter)' : undefined};
  -webkit-mask-image: url(${({ icon }) =>
    icon === 'facebook' ? '/img/facebook.svg' : undefined});
  mask-image: url(${({ icon }) =>
    icon === 'facebook' ? '/img/facebook.svg' : undefined});
  mask-image: url(${({ icon }) =>
    icon === 'twitter' ? '/img/twitter.svg' : undefined});
  mask-image: url(${({ icon }) =>
    icon === 'instagram' ? '/img/instagram.svg' : undefined});
  -webkit-mask-size: cover;
  mask-size: cover;
`;

export default Location;
