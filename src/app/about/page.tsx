'use client';

import dynamic from 'next/dynamic';
import styled from 'styled-components';
import type { Metadata } from 'next';

import Photo from './Photo';
import Contact from './Contact';

import AboutHero from '@/components/hero/AboutHero';

const StoryImage = dynamic(() => import('@/components/StoryImage'), {
  ssr: false,
});
const StoryDetails = dynamic(() => import('@/components/StoryDetails'), {
  ssr: false,
});
const StoryCards = dynamic(() => import('@/components/StoryCards'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'iDesignx | About',
};

const About = () => {
  return (
    <Container>
      <AboutHero />
      <StoryDetails />
      <StoryImage />
      <StoryCards />
      <Photo />
      <Contact />
    </Container>
  );
};

const Container = styled.main`
  background-color: ${({ theme }) => theme.bg};

  display: grid;
  grid-template-rows: 60vh 40vw min-content 20vw min-content;
  grid-template-columns:
    [full-start]minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 15rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];

  @media only screen and (max-width: 56.25em) {
    grid-template-rows: 60vh min-content 30vw min-content 20vw min-content;
  }

  @media only screen and (max-width: 37.5em) {
    grid-template-rows: 40vh min-content 30vw min-content 20vw;
  }

  @media only screen and (max-width: 25em) {
    grid-template-rows: 30vh min-content 30vw min-content 20vw;
  }
`;

export default About;
