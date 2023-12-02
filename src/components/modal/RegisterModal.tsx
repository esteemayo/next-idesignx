'use client';

import { useCallback, useMemo, useState } from 'react';

import LoginOptions from '../LoginOptions';
import Modal from './Modal';
import Heading from '../Heading';
import { Line } from '../Line';
import ToggleAccount from '../ToggleAccount';

import Input from '../inputs/Input';
import UploadInput from '../inputs/UploadInput';
import Select from '../inputs/Select';

import { useLoginModal } from '@/hooks/useLoginModal';
import { useRegisterModal } from '@/hooks/useRegisterModal';

import { genderLists } from '@/data/formData';

interface IErrors {
  name?: string;
  email?: string;
  username?: string;
  phone?: string;
  gender?: string;
  password?: string;
  passwordConfirm?: string;
}

enum STEPS {
  INFO = 0,
  DESC = 1,
  CREDENTIALS = 2,
  AVATAR = 3,
}

const initialState = {
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

  const [step, setStep] = useState(STEPS.INFO);
  const [errors, setErrors] = useState<IErrors>({});
  const [file, setFile] = useState<File>();
  const [data, setData] = useState(initialState);

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
    const { files } = e.target;
    const selectedFile = files as FileList;
    setFile(selectedFile?.[0]);
  }, []);

  const validateInputs = useCallback(() => {
    let errors: IErrors = {};
    const { name, email, username, phone, gender, password, passwordConfirm } =
      data;

    if (name.trim() === '') {
      errors.name = 'Name must not be empty';
    }

    if (email.trim() === '') {
      errors.email = 'Email must not be empty';
    } else {
      const regEx =
        /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)*[a-zA-Z]{2,9})$/;
      if (!email.match(regEx)) {
        errors.email = 'Email must be a valid email address';
      }
    }

    if (username.trim() === '') {
      errors.username = 'Username must not be empty';
    }

    if (phone.trim() === '') {
      errors.phone = 'Phone book must not be empty';
    }

    if (gender.trim() === '') {
      errors.gender = 'Gender must not be empty';
    }

    if (password === '') {
      errors.password = 'Password must not be empty';
    } else if (password.length < 8) {
      errors.password = 'Password should be at least 8 characters long';
    } else if (password !== passwordConfirm) {
      errors.passwordConfirm = 'Passwords do not match';
    }

    return errors;
  }, [data]);

  const handleClear = useCallback(() => {
    setData(initialState);
  }, []);

  const handleSubmit = useCallback(() => {
    if (step !== STEPS.AVATAR) {
      return handleNext();
    }

    const errors = validateInputs();

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    setErrors({});

    console.log({ ...data, file });
    handleClear();
    setStep(STEPS.INFO);
    handleToggle();
  }, [data, file, handleClear, handleNext, handleToggle, step, validateInputs]);

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

  let bodyContent;

  bodyContent = (
    <>
      <Heading title='Welcome to iDesignx' subtitle='Create an account!' />
      <Input
        name='name'
        label='Name'
        value={data.name}
        placeholder='Name'
        onChange={handleChange}
        error={errors.name}
      />
      <Input
        name='email'
        type='email'
        label='Email address'
        value={data.email}
        placeholder='Email address'
        onChange={handleChange}
        error={errors.email}
      />
    </>
  );

  if (step === STEPS.DESC) {
    bodyContent = (
      <>
        <Heading title='Welcome to iDesignx' subtitle='Create an account!' />
        <Input
          name='username'
          label='Username'
          value={data.username}
          placeholder='Username'
          onChange={handleChange}
          error={errors.username}
        />
        <Input
          name='phone'
          type='tel'
          label='Phone number'
          value={data.phone}
          placeholder='Phone number'
          onChange={handleChange}
          error={errors.phone}
        />
      </>
    );
  }

  if (step === STEPS.CREDENTIALS) {
    bodyContent = (
      <>
        <Heading title='Welcome to iDesignx' subtitle='Create an account!' />
        <Input
          name='password'
          type='password'
          label='Password'
          value={data.password}
          placeholder='Password'
          onChange={handleChange}
          error={errors.password}
        />
        <Input
          name='passwordConfirm'
          type='password'
          label='Confirm password'
          value={data.passwordConfirm}
          placeholder='Confirm password'
          onChange={handleChange}
          error={errors.passwordConfirm}
        />
      </>
    );
  }

  if (step === STEPS.AVATAR) {
    bodyContent = (
      <>
        <Heading title='Welcome to iDesignx' subtitle='Create an account!' />
        <Select
          name='gender'
          value={data.gender}
          label='Gender'
          options={genderLists}
          onChange={handleChange}
          error={errors.gender}
        />
        <UploadInput id='file' label='Upload avatar' onChange={handleFile} />
      </>
    );
  }

  const footerContent = (
    <>
      <Line />
      <LoginOptions />
      <ToggleAccount
        title='Already have an account?'
        label='Log in'
        onClick={handleToggle}
      />
    </>
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
