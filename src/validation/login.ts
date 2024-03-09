import { LoginData, LoginErrors } from '@/types';

export const validateLoginInputs = (data: LoginData) => {
  let errors: LoginErrors = {};
  const { email, password } = data;

  if (email.trim() === '') {
    errors.email = 'Email must not be empty';
  } else {
    const regEx =
      /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)*[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = 'Email must be a valid email address';
    }
  }

  if (password === '') {
    errors.password = 'Password must not be empty';
  } else if (password.length < 8) {
    errors.password = 'Password should be at least 8 characters long';
  }

  return errors;
};
