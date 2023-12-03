import type { Metadata } from 'next';

import ContactHero from '@/components/hero/ContactHero';
import ContactInfo from '@/components/contacts/ContactInfo';
import ContactForm from '@/components/ContactForm';
import ContactLayout from '@/components/layouts/ContactLayout';

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
