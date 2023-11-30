import type { Metadata } from 'next';

import ContactHero from '@/components/hero/ContactHero';
import Location from '@/components/Location';
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
      <Location />
    </ContactLayout>
  );
};

export default Contact;
