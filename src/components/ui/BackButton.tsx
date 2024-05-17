'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import ChevronLeftIcon from './icon/ChevronLeftIcon';

interface BackButtonProps {
  label: string;
  backUrl?: string;
  onClick?: () => void;
}

const BackButton = ({ label, backUrl, onClick }: BackButtonProps) => {
  const router = useRouter();

  const handleBackButtonClick = () => {
    if (onClick) {
      onClick();
    }
    if (backUrl === '-1') {
      router.back();
    }
  };

  return (
    <Link
      href={backUrl === undefined || backUrl === '-1' ? '#' : backUrl}
      className="flex items-center gap-1 text-gray-40"
      onClick={handleBackButtonClick}
    >
      <span className="text-[1.25rem]">
        <ChevronLeftIcon />
      </span>
      <span className="text-lg-200">{label}</span>
    </Link>
  );
};

export default BackButton;
