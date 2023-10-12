'use client';

import { FC, useEffect } from 'react';
import Heading from '@/components/Heading';

interface ErrorProps {
  error: Error;
}

const ErrorState: FC<ErrorProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Heading title='Uh oh' subtitle='Something went wrong' center='true' />
  );
};

export default ErrorState;
