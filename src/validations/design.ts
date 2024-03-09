import { DesignData, DesignErrors } from '@/types';

export const validateDesignInputs = (data: DesignData) => {
  let errors: DesignErrors = {};
  const { name, email, address, phone, subject, desc, category } = data;

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

  if (address.trim() === '') {
    errors.address = 'Address must not be empty';
  }

  if (phone.trim() === '') {
    errors.phone = 'Phone book must not be empty';
  }

  if (subject.trim() === '') {
    errors.subject = 'Subject must not be empty';
  }

  if (desc.trim() === '') {
    errors.desc = 'Description must not be empty';
  }

  if (category.trim() === '') {
    errors.category = 'Category must not be empty';
  }

  return errors;
};
