import clsx from 'clsx';

interface ButtonProps {
  buttonStyle?: 'primary' | 'light-primary';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ buttonStyle, children, onClick }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'title-sm-300 flex w-full items-center justify-center rounded-2xl py-5',
        {
          'bg-primary text-gray-00': buttonStyle === 'primary',
          'bg-primary-05 text-primary-80': buttonStyle === 'light-primary',
        },
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
