import type { Metadata } from 'next';

import ContactForm from '@/components/contacts/ContactForm';
import ContactHero from '@/components/hero/ContactHero';
import ContactLayout from '@/components/layouts/ContactLayout';
import ContactInfo from '@/components/contacts/ContactInfo';

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
