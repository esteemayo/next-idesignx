'use client';

import dynamic from 'next/dynamic';
import styled from 'styled-components';

import { useActiveMode } from '@/hooks/useActiveMode';
import ContactHero from '@/components/hero/ContactHero';

const Location = dynamic(() => import('@/components/Location'), { ssr: false });
const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  ssr: false,
});

const Contact = () => {
  const { activeMode } = useActiveMode();

  return (
    <Container>
      <ContactHero />
      <ContactForm />
      <Location mode={activeMode} />
    </Container>
  );
};

const Container = styled.main`
  background-color: ${({ theme }) => theme.bg};

  display: grid;
  grid-template-rows: 60vh min-content;
  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 15rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];

  @media only screen and (max-width: 56.25em) {
    grid-template-rows: 60vh repeat(2, min-content);
  }

  @media only screen and (max-width: 50em) {
    grid-template-rows: 40vh;
  }

  @media only screen and (max-width: 31.25em) {
    grid-template-rows: 30vh;
  }
`;

export default Contact;
