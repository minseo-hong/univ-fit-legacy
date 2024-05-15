import clsx from 'clsx';

interface ButtonProps {
  style?: 'primary' | 'light-primary';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ style = 'primary', children, onClick }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'title-sm-300 flex w-full items-center justify-center rounded-2xl py-5',
        {
          'bg-primary text-gray-00': style === 'primary',
          'bg-primary-05 text-primary-80': style === 'light-primary',
        },
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
