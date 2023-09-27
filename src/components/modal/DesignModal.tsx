'use  client';

import styled from 'styled-components';
import { useCallback, useState } from 'react';

import Modal from './Modal';
import { useDesignModal } from '@/hooks/useDesignModal';

enum STEPS {
  INFO = 0,
  IMAGES = 1,
}

const DesignModal = () => {
  const { isOpen, onClose } = useDesignModal();

  const [step, setStep] = useState(STEPS.INFO);

  const handlePrev = useCallback(() => {
    setStep((value) => value - 1);
  }, []);

  return <Modal title='Upload your design' isOpen={isOpen} onClose={onClose} />;
};

const Container = styled.div``;

export default DesignModal;
