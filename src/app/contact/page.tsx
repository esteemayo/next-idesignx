import type { Metadata } from 'next';

import ContactHero from '@/components/hero/ContactHero';
import ContactInfo from '@/components/ContactInfo';
import ContactLayout from '@/components/layouts/ContactLayout';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'iDesignx | Contact',
};

const Contact = () => {
  return (
    <ContactLayout>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
    </ContactLayout>
  );
};

export default Contact;
