import type { Metadata } from 'next';

import AboutHero from '@/components/hero/AboutHero';
import AboutLayout from '@/components/layouts/AboutLayout';
import StoryImage from '@/components/StoryImage';
import StoryDetails from '@/components/StoryDetails';
import StoryCards from '@/components/StoryCards';

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
