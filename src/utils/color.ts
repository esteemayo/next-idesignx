export const setBorderColor = (mode: string): string => {
  return mode === 'true'
    ? 'var(--clr-bg-dark-tertiary)'
    : 'var(--clr-purple-light-3)';
};
