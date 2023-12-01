'use client';

import Link from 'next/link';
import styled from 'styled-components';

import SocialIcon from './icons/SocialIcon';
import { useActiveMode } from '@/hooks/useActiveMode';

interface IMode {
  mode: string;
}

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
        <SocialIcon icon='facebook' />
        <SocialIcon icon='twitter' />
        <SocialIcon icon='instagram' />
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

export default Location;
