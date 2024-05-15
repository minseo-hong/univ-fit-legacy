import clsx from 'clsx';
import { useState } from 'react';

import ChevronRightIcon from '../icon/ChevronRightIcon';
import FilePencilIcon from '../icon/FilePencilIcon';
import HomeIcon from '../icon/HomeIcon';
import ListSearchIcon from '../icon/ListSearchIcon';
import NewsIcon from '../icon/NewsIcon';
import ReportMoneyIcon from '../icon/ReportMoneyIcon';
import LoginModal from './LoginModal';
import Link from 'next/link';

interface DrawerProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isDrawerOpen: boolean) => void;
}

const Drawer = ({ isDrawerOpen, setIsDrawerOpen }: DrawerProps) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  const menuList: {
    icon: React.ReactNode;
    label: React.ReactNode;
    href: string;
  }[] = [
    {
      icon: <HomeIcon />,
      label: '홈',
      href: '/',
    },
    {
      icon: <ListSearchIcon />,
      label: '장학금 공고',
      href: '/scholarships',
    },
    {
      icon: <NewsIcon />,
      label: '아티클',
      href: '#',
    },
    {
      icon: <ReportMoneyIcon />,
      label: '내 장학금',
      href: '#',
    },
    {
      icon: <FilePencilIcon />,
      label: '자기소개서',
      href: '/cover-letters',
    },
  ];

  const handleMenuClick = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div
        className={clsx(
          'fixed right-0 top-0 z-50 flex h-screen w-full justify-end bg-black transition-colors duration-300',
          {
            'bg-opacity-50': isDrawerOpen,
            'pointer-events-none bg-opacity-0': !isDrawerOpen,
          },
        )}
        onClick={() => setIsDrawerOpen(false)}
      >
        <div
          className={clsx(
            'w-[20rem] bg-gray-00 transition-transform duration-300',
            {
              'translate-x-0': isDrawerOpen,
              'translate-x-full': !isDrawerOpen,
            },
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <Link
            href="/me"
            className="flex items-center gap-4 pb-3 pl-6 pr-4 pt-5"

            // onClick={() => setIsLoginModalOpen(true)}
          >
            <div className="aspect-square w-[3rem] overflow-hidden rounded-full">
              <img
                src="/images/placeholders/placeholder-image.png"
                alt="프로필 이미지"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-lg-200 flex-1 text-gray-40">
              로그인 후 이용해주세요.
            </div>
            <div>
              <span className="text-[1.5rem] text-gray-40">
                <ChevronRightIcon />
              </span>
            </div>
          </Link>
          <ul>
            {menuList.map((menu, index) => (
              <li key={index}>
                <Link
                  href={menu.href}
                  className="flex items-center gap-2 px-6 py-4 text-gray-60"
                  onClick={handleMenuClick}
                >
                  <span className="text-[1.25rem]">{menu.icon}</span>
                  <span className="text-lg-200 flex-1">{menu.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <LoginModal
        isLoginModalOpen={isLoginModalOpen}
        setIsLoginModalOpen={setIsLoginModalOpen}
      />
    </>
  );
};

export default Drawer;
