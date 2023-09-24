'use client';

import styled from 'styled-components';
import ContactHero from '@/components/hero/ContactHero';

const Contact = () => {
  return (
    <Container>
      <ContactHero />
    </Container>
  );
};

const Container = styled.main`
  display: grid;
  grid-template-rows: 60vh min-content;
  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 15rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];
`;

export default Contact;
