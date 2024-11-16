'use client';

import LoginOptions from './LoginOptions';
import ToggleAccount from './ToggleAccount';

import { Line } from './Line';

const AuthFooter = ({ title, label, onToggle }) => {
  return (
    <>
      <Line />
      <LoginOptions />
      <ToggleAccount title={title} label={label} onClick={onToggle} />
    </>
  );
};

export default AuthFooter;
