import dynamic from 'next/dynamic';

import Photo from './Photo';
import Contact from './Contact';

import { cardItems, storyImages } from '@/data';
import AboutHero from '@/components/hero/AboutHero';
import AboutLayout from '@/components/layouts/AboutLayout';

const StoryImage = dynamic(() => import('@/components/StoryImage'), {
  ssr: false,
});
const StoryDetails = dynamic(() => import('@/components/StoryDetails'), {
  ssr: false,
});
const StoryCards = dynamic(() => import('@/components/StoryCards'), {
  ssr: false,
});

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
