'use client';

import styled from 'styled-components';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Printings from '@/components/Printings';
import SeenOn from '@/components/SeenOn';
import Products from '@/components/Products';

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
`;

export default Home;
