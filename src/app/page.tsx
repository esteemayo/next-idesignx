'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import styled from 'styled-components';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/hero/Hero';

import { useDarkMode } from '@/hooks/useDarkMode';
import { brands, printItems, productImages } from '@/data';

const Printings = dynamic(() => import('@/components/Printings'), {
  ssr: false,
});
const SeenOn = dynamic(() => import('@/components/SeenOn'), { ssr: false });
const Products = dynamic(() => import('@/components/Products'), { ssr: false });

const Home = () => {
  const mode = useDarkMode((state) => state.mode);

  const gradientEffect = useMemo(() => {
    return mode ? false : true;
  }, [mode]);

  return (
    <Container>
      <Hero />
      <About />
      <Contact />
      <SeenOn data={brands} gradient={gradientEffect} />
      <Products data={productImages} />
      <Printings data={printItems} />
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.bg};

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

  @media only screen and (max-width: 37.5em) {
    grid-template-rows: 60vh;
  }

  @media only screen and (max-width: 25em) {
    grid-template-rows: 40vh;
  }
`;

export default Home;
