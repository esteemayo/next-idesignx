'use client';

import GoogleIcon from '@mui/icons-material/Google';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';

import Button from './buttons/Button';

const LoginOptions = () => {
  return (
    <Container>
      <Button
        small='true'
        outline='true'
        type='button'
        label='Login with Google'
        icon={GoogleIcon}
      />
      <Button
        small='true'
        outline='true'
        type='button'
        label='Login with Github'
        icon={GitHubIcon}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  & > * {
    width: 100%;
  }
`;

export default LoginOptions;
