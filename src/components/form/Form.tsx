'use client';

import styled from 'styled-components';

interface FormProps {
  children: React.ReactNode;
  onSubmit(e: React.FormEvent<HTMLFormElement>): void;
}

const Form = ({ children, onSubmit }: FormProps) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

const StyledForm = styled.form``;

export default Form;
