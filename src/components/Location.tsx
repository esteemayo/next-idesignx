'use client';

import Link from 'next/link';
import styled from 'styled-components';

interface LocationProps {
  mode: string;
}

const Location: React.FC<LocationProps> = ({ mode }) => {
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
        <StyledLink href='#' mode={mode}>
          <Facebook>&nbsp;</Facebook>
        </StyledLink>
        <StyledLink href='#' mode={mode}>
          <Twitter>&nbsp;</Twitter>
        </StyledLink>
        <StyledLink href='#' mode={mode}>
          <Instagram>&nbsp;</Instagram>
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

  background-color: ${({ theme }) => theme.bgLoc};
  color: ${({ theme }) => theme.textSoft};
  margin: 15rem 0;
  padding: 5rem;
  line-height: 1.4;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;

  @media only screen and (max-width: 56.25em) {
    grid-row: 3 / 4;
    grid-column: center-start / center-end;

    margin: 5rem 0;
    border-radius: 1rem;
  }

  @media only screen and (max-width: 31.25em) {
    margin-top: 3rem;
    padding: 4rem 3rem;
  }
`;

const Wrapper = styled.div`
  margin-bottom: 3rem;
`;

const Heading = styled.h3`
  text-transform: capitalize;
  font-weight: lighter;
  font-size: 2rem;
  margin-bottom: 1rem;

  @media only screen and (max-width: 56.25em) {
    font-size: 1.85rem;
  }
`;

const Text = styled.p`
  font-size: 1.8rem;

  @media only screen and (max-width: 56.25em) {
    font-size: 1.65rem;
  }
`;

const Br = styled.br``;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
`;

const StyledLink = styled(Link)<LocationProps>`
  width: 4rem;
  height: 4rem;
  text-decoration: none;
  border-radius: 50%;
  outline-color: ${({ theme }) => theme.outline};
  transition: all 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ mode }) =>
      mode === 'true' ? '#2b3138' : '#bc9ad1'};
  }
`;

const Facebook = styled.span`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-color: var(--clr-facebook);
  -webkit-mask-image: url(/svg/facebook.svg);
  mask-image: url(/svg/facebook.svg);
  -webkit-mask-size: cover;
  mask-size: cover;
`;

const Twitter = styled.span`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-color: var(--clr-twitter);
  -webkit-mask-image: url(/svg/twitter.svg);
  mask-image: url(/svg/twitter.svg);
  -webkit-mask-size: cover;
  mask-size: cover;
`;

const Instagram = styled.span`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-color: var(--clr-instagram);
  -webkit-mask-image: url(/svg/instagram.svg);
  mask-image: url(/svg/instagram.svg);
  background-image: linear-gradient(
    to bottom left,
    var(--clr-instagram-1),
    var(--clr-instagram-2),
    var(--clr-instagram-3)
  );
  -webkit-mask-size: cover;
  mask-size: cover;
`;

export default Location;
