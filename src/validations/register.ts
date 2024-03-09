import { RegisterData, RegisterErrors } from '@/types';

export const validateRegisterInputs = (data: RegisterData) => {
  let errors: RegisterErrors = {};
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
};
