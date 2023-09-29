'use client';

import dynamic from 'next/dynamic';
import styled from 'styled-components';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/hero/Hero';

const Printings = dynamic(() => import('@/components/Printings'), {
  ssr: false,
});
const SeenOn = dynamic(() => import('@/components/SeenOn'), { ssr: false });
const Products = dynamic(() => import('@/components/Products'), { ssr: false });

const Home = () => {
  return (
    <Container>
      <Hero />
      <About />
      <Contact />
      <SeenOn />
      <Products />
      <Printings />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 80vh repeat(4, min-content);
  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 15rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];

  @media only screen and (max-width: 50em) {
    grid-template-rows: 80vh repeat(5, min-content);
  }
`;

export default Home;
