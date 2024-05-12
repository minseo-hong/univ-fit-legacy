'use client';

import { useEffect, useRef, useState } from 'react';

import ChevronDownIcon from '../ui/icon/ChevronDownIcon';
import CheckIcon from '../ui/icon/CheckIcon';
import clsx from 'clsx';

interface ScholarshipDropdownProps {
  selectedIndex: number | null;
  setSelectedIndex: (selectedIndex: number | null) => void;
}

const ScholarshipDropdown = ({
  selectedIndex,
  setSelectedIndex,
}: ScholarshipDropdownProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scholarshipList: { title: string }[] = [
    {
      title: '미래에셋 해외 교환장학',
    },
    {
      title: '월곡주얼리장학생',
    },
    {
      title: '인문100년장학금',
    },
  ];

  const handleDropdownClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSelectScholarship = (index: number) => {
    setSelectedIndex(index);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isMenuOpen]);

  return (
    <div ref={menuRef} className="relative">
      <div
        className="flex items-center justify-between rounded-lg border border-gray-15 bg-gray-00 px-4 py-3"
        onClick={handleDropdownClick}
      >
        <span
          className={clsx('text-md-200', {
            'text-gray-80': selectedIndex !== null,
            'text-gray-30': selectedIndex === null,
          })}
        >
          {selectedIndex !== null
            ? scholarshipList[selectedIndex].title
            : '장학금을 선택하세요.'}
        </span>
        <span className="text-[1.25rem] text-gray-40">
          <ChevronDownIcon />
        </span>
      </div>
      {isMenuOpen && (
        <ul className="absolute z-10 mt-2 w-full rounded-lg bg-white shadow-[0px_0px_16px_0px_rgba(0,0,0,0.10)]">
          {scholarshipList.map((scholarship, index) => (
            <li
              key={index}
              className="flex items-center gap-2 p-4"
              onClick={() => handleSelectScholarship(index)}
            >
              {selectedIndex === index && (
                <span>
                  <CheckIcon />
                </span>
              )}
              <span
                className={clsx({
                  'text-md-300 text-gray-80': selectedIndex === index,
                  'text-md-200 text-gray-50': selectedIndex !== index,
                })}
              >
                {scholarship.title}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ScholarshipDropdown;
