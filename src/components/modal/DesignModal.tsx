'use  client';

import styled from 'styled-components';
import { useState } from 'react';

import Modal from './Modal';
import { useDesignModal } from '@/hooks/useDesignModal';

enum STEPS {
  INFO = 0,
  IMAGES = 1,
}

const DesignModal = () => {
  const { isOpen, onClose } = useDesignModal();

  const [step, setStep] = useState(STEPS.INFO);

  return <Modal title='Upload your design' isOpen={isOpen} onClose={onClose} />;
};

const Container = styled.div``;

export default DesignModal;
