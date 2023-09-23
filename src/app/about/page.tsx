'use client';

import styled from 'styled-components';

import AboutHero from '@/components/hero/AboutHero';
import StoryImage from '@/components/StoryImage';
import StoryDetails from '@/components/StoryDetails';

const About = () => {
  return (
    <Container>
      <AboutHero />
      <StoryDetails />
      <StoryImage />
    </Container>
  );
};

const Container = styled.main`
  display: grid;
  grid-template-rows: 60vh 40vw min-content 20vw min-content;
  grid-template-columns:
    [full-start]minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 15rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];
`;

export default About;
