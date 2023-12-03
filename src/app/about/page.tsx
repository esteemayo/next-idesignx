import type { Metadata } from 'next';

import AboutHero from '@/components/hero/AboutHero';
import AboutLayout from '@/components/layouts/AboutLayout';
import StoryImage from '@/components/story/StoryImage';
import StoryCards from '@/components/story/StoryCards';
import StoryDetails from '@/components/story/StoryDetails';

import Photo from './Photo';
import Contact from './Contact';

import { cardItems, storyImages } from '@/data';

export const metadata: Metadata = {
  title: 'iDesignx | About',
};

const About = () => {
  return (
    <AboutLayout>
      <AboutHero />
      <StoryDetails />
      <StoryImage images={storyImages} />
      <StoryCards data={cardItems} />
      <Photo />
      <Contact />
    </AboutLayout>
  );
};

export default About;
