'use client';

import { useCallback, useMemo, useState } from 'react';

import RegisterCredentials from '../register/RegisterCredentials';
import RegisterInfo from '../register/RegisterInfo';
import RegisterDescription from '../register/RegisterDescription';
import RegisterAvatar from '../register/RegisterAvatar';

import Modal from './Modal';
import AuthFooter from '../AuthFooter';

import { useLoginModal } from '@/hooks/useLoginModal';
import { useRegisterModal } from '@/hooks/useRegisterModal';

import { RegisterData, RegisterErrors } from '@/types';
import { genderLists } from '@/data/formData';
import { validateRegisterInputs } from '@/validations/register';

enum STEPS {
  INFO = 0,
  DESC = 1,
  CREDENTIALS = 2,
  AVATAR = 3,
}

const initialState: RegisterData = {
  name: '',
  email: '',
  username: '',
  phone: '',
  gender: '',
  password: '',
  passwordConfirm: '',
};

const RegisterModal = () => {
  const isOpen = useRegisterModal((state) => state.isOpen);
  const onOpen = useLoginModal((state) => state.onOpen);
  const onClose = useRegisterModal((state) => state.onClose);

  const [file, setFile] = useState<File>();
  const [data, setData] = useState(initialState);
  const [step, setStep] = useState(STEPS.INFO);
  const [errors, setErrors] = useState<RegisterErrors>({});

  const handlePrev = useCallback(() => {
    setStep((value) => value - 1);
  }, []);

  const handleNext = useCallback(() => {
    setStep((value) => value + 1);
  }, []);

  const handleToggle = useCallback(() => {
    onClose();
    setErrors({});
    onOpen();
  }, [onClose, onOpen]);

  const handleClose = useCallback(() => {
    onClose();
    setErrors({});
  }, [onClose]);

  const handleChange = useCallback(
    ({
      target: input,
    }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = input;
      setData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target as HTMLInputElement;
    const selectedFile = (files as FileList)[0];
    setFile(selectedFile);
  }, []);

  const handleClear = useCallback(() => {
    setData(initialState);
  }, []);

  const handleSubmit = useCallback(() => {
    if (step !== STEPS.AVATAR) {
      return handleNext();
    }

    const errors = validateRegisterInputs(data);

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    setErrors({});

    console.log({ ...data, file });
    handleClear();
    setStep(STEPS.INFO);
    handleToggle();
  }, [data, file, handleClear, handleNext, handleToggle, step]);

  const actionLabel = useMemo(() => {
    if (step === STEPS.AVATAR) {
      return 'Register';
    }

    return 'Next';
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step !== STEPS.INFO) {
      return 'Prev';
    }

    return undefined;
  }, [step]);

  const handleSecondaryAction = useMemo(() => {
    return step !== STEPS.INFO ? handlePrev : undefined;
  }, [handlePrev, step]);

  const btnSize = useMemo(() => {
    if (step === STEPS.INFO) {
      return 'true';
    }
  }, [step]);

  let bodyContent: JSX.Element;

  bodyContent = (
    <RegisterInfo
      name={data.name}
      email={data.email}
      errors={errors}
      onChange={handleChange}
    />
  );

  if (step === STEPS.DESC) {
    bodyContent = (
      <RegisterDescription
        username={data.username}
        phone={data.phone}
        errors={errors}
        onChange={handleChange}
      />
    );
  }

  if (step === STEPS.CREDENTIALS) {
    bodyContent = (
      <RegisterCredentials
        password={data.password}
        passwordConfirm={data.passwordConfirm}
        errors={errors}
        onChange={handleChange}
      />
    );
  }

  if (step === STEPS.AVATAR) {
    bodyContent = (
      <RegisterAvatar
        gender={data.gender}
        options={genderLists}
        error={errors.gender}
        onChange={handleChange}
        onChangeFile={handleFile}
      />
    );
  }

  const footerContent = (
    <AuthFooter
      title='Already have an account?'
      label='Log in'
      onToggle={handleToggle}
    />
  );

  return (
    <Modal
      isOpen={isOpen}
      title='Register'
      size={btnSize}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={handleSecondaryAction}
      onClose={handleClose}
      body={bodyContent}
      footer={footerContent}
      onSubmit={handleSubmit}
    />
  );
};

export default RegisterModal;
