import clsx from 'clsx';
import Link from 'next/link';

interface CapsuleProps extends React.HTMLAttributes<HTMLElement> {
  href?: string;
  as?: React.ElementType;
  className?: string;
  variant?:
    | 'default'
    | 'primary'
    | 'stroke-default'
    | 'stroke-primary'
    | 'stroke-success';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Capsule = ({
  href,
  children,
  variant: style = 'default',
  className,
  size,
  as: Wrapper = href ? Link : 'div',
  ...props
}: CapsuleProps) => {
  return (
    <Wrapper
      {...props}
      href={href}
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
          'text-md-200 px-3 py-1.5': size === 'sm',
        },
      )}
    >
      {children}
    </Wrapper>
  );
};

export default Capsule;
