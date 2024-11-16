'use client';

import LoginOptions from './LoginOptions';
import ToggleAccount from './ToggleAccount';

import { Line } from './Line';
import { AuthFooterProps } from '@/types';

const AuthFooter = ({ title, label, onToggle }: AuthFooterProps) => {
  return (
    <>
      <Line />
      <LoginOptions />
      <ToggleAccount title={title} label={label} onClick={onToggle} />
    </>
  );
};

export default AuthFooter;
