import dynamic from 'next/dynamic';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/hero/Hero';
import HomeLayout from '@/components/layouts/HomeLayout';

import { brands, printItems, productImages } from '@/data';

const Printings = dynamic(() => import('@/components/Printings'), {
  ssr: false,
});
const SeenOn = dynamic(() => import('@/components/SeenOn'), { ssr: false });
const Products = dynamic(() => import('@/components/Products'), { ssr: false });

const Home = () => {
  return (
    <HomeLayout>
      <Hero />
      <About />
      <Contact />
      <SeenOn data={brands} />
      <Products data={productImages} />
      <Printings data={printItems} />
    </HomeLayout>
  );
};

export default Home;
