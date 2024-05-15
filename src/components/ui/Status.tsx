import clsx from 'clsx';

interface StatusProps {
  children: React.ReactNode;
  style: 'default' | 'primary' | 'success' | 'danger';
}

const Status = ({ children, style }: StatusProps) => {
  return (
    <span
      className={clsx('rounded-full px-2 py-0.5 text-[0.6875rem] font-medium', {
        'bg-gray-00 text-gray-40': style === 'default',
        'bg-primary-00 text-primary-80': style === 'primary',
        'bg-success-01 text-success-60': style === 'success',
        'bg-danger-00 text-danger-50': style === 'danger',
      })}
    >
      {children}
    </span>
  );
};

export default Status;
