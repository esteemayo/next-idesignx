'use client';

import styled from 'styled-components';

interface FormProps {
  children: React.ReactElement;
  onSubmit(): void;
}

const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

const StyledForm = styled.form``;

export default Form;
