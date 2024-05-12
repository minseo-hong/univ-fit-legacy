'use client';

import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import DotsVerticalIcon from '../ui/icon/DotsVerticalIcon';
import ArrowBarToUpIcon from '../ui/icon/ArrowBarToUpIcon';
import PencilCogIcon from '../ui/icon/PencilCogIcon';
import TrashXIcon from '../ui/icon/TrashXIcon';

const DotsMenuButton = () => {
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
    },
    {
      label: '삭제하기',
      icon: <TrashXIcon />,
      style: 'danger',
      onClick: () => handleDeleteMenuItemClick(),
    },
  ];

  const popUpButtonList: {
    label: string;
    style: 'default' | 'danger';
    onClick?: () => void;
  }[] = [
    {
      label: '취소',
      style: 'default',
      onClick: () => handleDeletePopUpClose(),
    },
    {
      label: '삭제',
      style: 'danger',
      onClick: () => handleDeleteButtonClick(),
    },
  ];

  const handleDotsMenuButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
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
    <>
      <div ref={menuRef} className="relative">
        <span
          className="cursor-pointer text-[1.25rem] text-gray-20"
          onClick={() => handleDotsMenuButtonClick()}
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
        <div
          className="fixed left-0 top-0 z-50 flex h-screen w-full cursor-pointer items-center justify-center bg-black bg-opacity-50"
          onClick={() => handleDeletePopUpClose()}
        >
          <div
            className="mx-6 w-[22rem] cursor-auto rounded-2xl border border-gray-15 bg-gray-00"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-pop-up px-6 py-9 text-center text-gray-60">
              작성했던 문서가 사라집니다.
              <br />
              삭제하시겠습니까?
            </p>
            <div className="flex border-t border-gray-15">
              {popUpButtonList.map((popUpButton, index) => (
                <button
                  key={index}
                  className={clsx(
                    'text-lg-200 flex-1 border-r border-gray-15 py-4 last:border-r-0',
                    {
                      'text-gray-40': popUpButton.style === 'default',
                      'text-danger-40': popUpButton.style === 'danger',
                    },
                  )}
                  onClick={() => handleDeletePopUpClose()}
                >
                  {popUpButton.label}
                </button>
              ))}

              {/* <button
                className="text-lg-200 flex-1 py-4 text-danger-40"
                onClick={() => handleDeleteButtonClick()}
              >
                삭제
              </button> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DotsMenuButton;
