'use client';

import { useLoginModal } from '@/hooks/useLoginModal';
import Modal from './Modal';
import Form from '../form/Form';
import { useForm } from '@/hooks/useForm';
import Input from '../inputs/Input';

const initialState = {
  email: '',
  password: '',
};

const LoginModal = () => {
  const isOpen = useLoginModal((state) => state.isOpen);
  const onClose = useLoginModal((state) => state.onClose);

  const onSubmitHandler = () => {};

  const { data, handleChange, handleSubmit } = useForm(
    onSubmitHandler,
    initialState
  );

  const bodyContent = (
    <Form onSubmit={handleSubmit}>
      <Input
        name='name'
        label='Email address'
        value={data.email}
        placeholder='Email address'
        onChange={handleChange}
      />
      <Input
        name='name'
        label='Password'
        value={data.password}
        placeholder='********'
        onChange={handleChange}
      />
    </Form>
  );

  return <Modal isOpen={isOpen} onClose={onClose} body={bodyContent} />;
};

export default LoginModal;
