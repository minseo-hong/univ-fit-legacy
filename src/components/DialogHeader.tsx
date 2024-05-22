import Link from 'next/link';

import NavBarHide from './ui/global-style/NavBarHide';
import XIcon from './ui/icon/XIcon';
import { useRouter } from 'next/navigation';

interface DialogHeaderProps {
  title: string;
  closeOnClick?: () => void;
  confirmButton?: {
    onClick?: () => void;
  };
}

const DialogHeader = ({
  title,
  closeOnClick,
  confirmButton,
}: DialogHeaderProps) => {
  const router = useRouter();

  const handleCloseButtonClick = () => {
    if (closeOnClick) {
      closeOnClick();
    } else {
      router.back();
    }
  };

  return (
    <>
      <NavBarHide />
      <div>
        <header className="fixed top-0 z-50 grid w-full grid-cols-3 bg-white p-4">
          <button
            className="text-left text-[1.25rem]"
            onClick={handleCloseButtonClick}
          >
            <XIcon />
          </button>
          <h1 className="title-sm-200 text-center text-gray-90">{title}</h1>
          <button
            className="title-sm-300 text-right text-primary"
            onClick={confirmButton?.onClick}
          >
            저장
          </button>
        </header>
        <div className="h-[56px]" />
      </div>
    </>
  );
};

export default DialogHeader;
