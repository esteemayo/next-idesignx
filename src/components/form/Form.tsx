'use client';

import { FC } from 'react';
import styled from 'styled-components';

interface FormProps {
  children: React.ReactNode;
  onSubmit(e: React.FormEvent<HTMLFormElement>): void;
}

const Form: FC<FormProps> = ({ children, onSubmit }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

const StyledForm = styled.form``;

export default Form;
