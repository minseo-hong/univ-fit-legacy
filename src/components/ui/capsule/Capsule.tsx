import clsx from 'clsx';

interface DrawerProps {
  className?: string;
  style?:
    | 'default'
    | 'primary'
    | 'stroke-default'
    | 'stroke-primary'
    | 'stroke-success';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Capsule = ({
  children,
  style = 'default',
  className,
  size,
}: DrawerProps) => {
  return (
    <div
      className={clsx(
        'rounded-full',
        className,
        {
          'bg-primary text-gray-00': style === 'primary',
          'bg-gray-05 text-gray-40': style === 'default',
          'border border-primary bg-gray-00 text-primary':
            style === 'stroke-primary',
          'border border-gray-15 bg-gray-00 text-gray-30':
            style === 'stroke-default',
          'border border-success-20 bg-gray-00 text-success-50':
            style === 'stroke-success',
        },
        {
          'title-sm-200 px-6 py-3': size === 'lg',
          'text-lg-200 px-4 py-2': size === 'md',
          'text-md-200 px-3 py-1': size === 'sm',
        },
      )}
    >
      {children}
    </div>
  );
};

export default Capsule;
