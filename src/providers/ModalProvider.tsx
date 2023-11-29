import DesignModal from '@/components/modal/DesignModal';
import LoginModal from '@/components/modal/LoginModal';
import RegisterModal from '@/components/modal/RegisterModal';

const ModalProvider = () => {
  return (
    <>
      <DesignModal />
      <LoginModal />
      <RegisterModal />
    </>
  );
};

export default ModalProvider;
