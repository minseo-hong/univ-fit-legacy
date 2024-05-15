import clsx from 'clsx';

import StarFilledIcon from './icon/StarFilledIcon';

interface StatusProps {
  score: number;
}

const Stars = ({ score }: StatusProps) => {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, index) => index + 1).map((th) => (
        <span
          key={th}
          className={clsx({
            'text-primary': th <= score,
            'text-gray-10': th > score,
          })}
        >
          <StarFilledIcon />
        </span>
      ))}
    </div>
  );
};

export default Stars;
