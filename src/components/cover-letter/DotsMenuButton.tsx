'use client';

import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import DotsVerticalIcon from '../ui/icon/DotsVerticalIcon';
import ArrowBarToUpIcon from '../ui/icon/ArrowBarToUpIcon';
import PencilCogIcon from '../ui/icon/PencilCogIcon';
import TrashXIcon from '../ui/icon/TrashXIcon';
import PopUp from '../ui/PopUp';

interface DotsMenuButtonProps {
  coverLetterId: number;
}

const DotsMenuButton = ({ coverLetterId }: DotsMenuButtonProps) => {
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDeletePopUpOpen, setIsDeletePopUpOpen] = useState(false);

  const menuList: {
    label: string;
    icon: JSX.Element;
    style: 'default' | 'danger';
    onClick?: () => void;
  }[] = [
    {
      label: '내보내기',
      icon: <ArrowBarToUpIcon />,
      style: 'default',
    },
    {
      label: '수정하기',
      icon: <PencilCogIcon />,
      style: 'default',
      onClick: () => handleEditMenuItemClick(),
    },
    {
      label: '삭제하기',
      icon: <TrashXIcon />,
      style: 'danger',
      onClick: () => handleDeleteMenuItemClick(),
    },
  ];

  const handleDotsMenuButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleEditMenuItemClick = () => {
    router.push(`/cover-letters/${coverLetterId}/edit`);
  };

  const handleDeleteMenuItemClick = () => {
    setIsMenuOpen(false);
    setIsDeletePopUpOpen(true);
  };

  const handleDeletePopUpClose = () => {
    setIsDeletePopUpOpen(false);
  };

  const handleDeleteButtonClick = () => {
    setIsDeletePopUpOpen(false);
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
    <div onClick={(e) => e.preventDefault()}>
      <div ref={menuRef} className="relative">
        <span
          className="cursor-pointer text-[1.25rem] text-gray-20"
          onClick={(e) => handleDotsMenuButtonClick(e)}
        >
          <DotsVerticalIcon />
        </span>
        {isMenuOpen && (
          <ul className="absolute -bottom-2 right-0 z-40 w-[6.5rem] translate-y-full rounded-xl bg-gray-00 shadow-[0px_0px_30px_0px_rgba(0,0,0,0.15)]">
            {menuList.map((menu, index) => (
              <li
                key={index}
                className={clsx(
                  'flex cursor-pointer items-center justify-between gap-1 px-4 py-2.5',
                  {
                    'text-gray-50': menu.style === 'default',
                    'text-danger-40': menu.style === 'danger',
                  },
                )}
                onClick={menu.onClick}
              >
                <span>{menu.icon}</span>
                <span className="text-md-200">{menu.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {isDeletePopUpOpen && (
        <PopUp
          confirmButton={{ label: '삭제' }}
          cancelButton={{ label: '취소' }}
          onConfirm={handleDeleteButtonClick}
          onCancel={handleDeletePopUpClose}
        >
          작성했던 문서가 사라집니다.
          <br />
          삭제하시겠습니까?
        </PopUp>
      )}
    </div>
  );
};

export default DotsMenuButton;
