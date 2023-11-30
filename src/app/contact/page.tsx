import dynamic from 'next/dynamic';

import { useActiveMode } from '@/hooks/useActiveMode';
import ContactHero from '@/components/hero/ContactHero';
import ContactLayout from '@/components/layouts/ContactLayout';

const Location = dynamic(() => import('@/components/Location'), { ssr: false });
const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  ssr: false,
});

const Contact = () => {
  const { activeMode } = useActiveMode();

  return (
    <ContactLayout>
      <ContactHero />
      <ContactForm />
      <Location mode={activeMode} />
    </ContactLayout>
  );
};

export default Contact;
