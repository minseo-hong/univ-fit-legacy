import clsx from 'clsx';

import XIcon from '../icon/XIcon';

interface LoginModalProps {
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (isLoginModalOpen: boolean) => void;
}

const LoginModal = ({
  isLoginModalOpen,
  setIsLoginModalOpen,
}: LoginModalProps) => {
  return (
    <div
      className={clsx(
        'fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-black bg-opacity-50 transition-opacity',
        {
          'opacity-100': isLoginModalOpen,
          'pointer-events-none opacity-0': !isLoginModalOpen,
        },
      )}
      onClick={() => setIsLoginModalOpen(false)}
    >
      <div
        className="z-50 flex w-[20rem] flex-col items-center rounded-2xl border border-gray-15 bg-gray-00 p-4 pb-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex w-full justify-end">
          <button
            className="text-[1.5rem]"
            onClick={() => setIsLoginModalOpen(false)}
          >
            <XIcon />
          </button>
        </div>
        <div className="w-[9rem]">
          <img
            src="/logo/logo-text.svg"
            alt="로고"
            className="h-full w-full object-cover"
          />
        </div>
        <p className="text-sm-200 mt-6 text-gray-40">
          로그인하고 나에게 맞는 장학금을 추천받으세요!
        </p>
        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-kakao-yellow py-4">
          <div>
            <img src="/icons/kakao.svg" alt="카카오 아이콘" />
          </div>
          <span className="text-md-200 text-grayscale-gray-100">
            카카오 로그인
          </span>
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
