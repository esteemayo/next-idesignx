import ContactHero from '@/components/hero/ContactHero';
import Location from '@/components/Location';
import ContactLayout from '@/components/layouts/ContactLayout';
import ContactForm from '@/components/ContactForm';

import { useActiveMode } from '@/hooks/useActiveMode';

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
