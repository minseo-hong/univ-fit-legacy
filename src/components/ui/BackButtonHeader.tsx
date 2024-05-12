import clsx from 'clsx';
import Link from 'next/link';

import ChevronLeftIcon from './icon/ChevronLeftIcon';

interface BackButtonProps {
  as?: React.ElementType;
  backButton: {
    label: string;
    backUrl?: string;
    onClick?: () => void;
  };
  confirmButton?: {
    label: string;
    onClick?: () => void;
  };
  fixed?: boolean;
}

const BackButtonHeader = ({
  as: Wrapper = 'div',
  backButton,
  confirmButton,
  fixed = false,
}: BackButtonProps) => {
  return (
    <Wrapper>
      <div
        className={clsx(
          'flex w-full items-center justify-between bg-white p-4 pt-3',
          {
            'fixed top-[4rem] z-10': fixed,
          },
        )}
      >
        <Link
          href={backButton?.backUrl || '#'}
          className="flex items-center gap-1 text-gray-40"
          onClick={backButton.onClick}
        >
          <span className="text-[1.25rem]">
            <ChevronLeftIcon />
          </span>
          <span className="text-lg-200">{backButton.label}</span>
        </Link>
        {confirmButton && (
          <button
            className="title-sm-300 text-primary"
            onClick={confirmButton.onClick}
          >
            {confirmButton.label}
          </button>
        )}
      </div>
      {fixed && <div className="h-[3rem]" />}
    </Wrapper>
  );
};

export default BackButtonHeader;
