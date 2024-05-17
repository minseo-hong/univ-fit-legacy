import clsx from 'clsx';

import BackButton from './BackButton';

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
  padding?: boolean;
}

const BackButtonHeader = ({
  as: Wrapper = 'div',
  backButton,
  confirmButton,
  fixed = false,
  padding = true,
}: BackButtonProps) => {
  return (
    <Wrapper>
      <div
        className={clsx(
          'flex h-[3rem] w-full items-center justify-between bg-white',
          {
            'fixed z-10': fixed,
            'p-4 pt-3': padding,
          },
        )}
      >
        <BackButton {...backButton} />
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
