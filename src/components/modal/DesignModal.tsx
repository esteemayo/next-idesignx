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

  const handleNext = useCallback(() => {
    setStep((value) => value + 1);
  }, []);

  const handleSubmit = useCallback(() => {
    if (step !== STEPS.IMAGES) {
      return handleNext();
    }
  }, [handleNext, step]);

  return (
    <Modal
      title='Upload your design'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};

const Container = styled.div``;

export default DesignModal;
