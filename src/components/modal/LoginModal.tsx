'use client';

import { useLoginModal } from '@/hooks/useLoginModal';

const LoginModal = () => {
  const onOpen = useLoginModal((state) => state.onOpen);
  const onClose = useLoginModal((state) => state.onClose);

  return <div>LoginModal</div>;
};

export default LoginModal;
