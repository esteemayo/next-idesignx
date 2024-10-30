import type { Metadata } from 'next';

import About from '@/components/About';
import Printings from '@/components/Printings';
import SeenOn from '@/components/SeenOn';
import Contact from '@/components/contacts/Contact';
import Hero from '@/components/hero/Hero';
import HomeLayout from '@/components/layouts/HomeLayout';
import Products from '@/components/Products';

import { brands, printItems, productImages } from '@/data';

export const metadata: Metadata = {
  title: 'iDesignx | Home',
};

const Home = () => {
  return (
    <HomeLayout>
      <Hero />
      <About />
      {/* <Contact /> */}
      {/* <SeenOn data={brands} /> */}
      {/* <Products data={productImages} /> */}
      {/* <Printings data={printItems} /> */}
    </HomeLayout>
  );
};

export default Home;
