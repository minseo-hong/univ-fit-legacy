import clsx from 'clsx';

interface ButtonProps {
  buttonStyle?: 'primary' | 'light-primary';
  children: React.ReactNode;
}

const Button = ({
  buttonStyle = 'primary',
  children,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={clsx(
        'title-sm-300 flex w-full items-center justify-center rounded-2xl py-5',
        {
          'bg-primary text-gray-00': buttonStyle === 'primary',
          'bg-primary-05 text-primary-80': buttonStyle === 'light-primary',
        },
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
