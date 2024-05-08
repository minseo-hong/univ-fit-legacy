import clsx from 'clsx';

interface DrawerProps {
  children: React.ReactNode;
  style?: 'default' | 'variant5';
}

const Badge = ({ children, style = 'default' }: DrawerProps) => {
  return (
    <div
      className={clsx('caption-300 rounded-full px-3 py-1', {
        'bg-gray-05 text-gray-40': style === 'default',
        'border border-success-20 bg-gray-00 text-success-50':
          style === 'variant5',
      })}
    >
      {children}
    </div>
  );
};

export default Badge;
