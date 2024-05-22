'use client';

import { useState } from 'react';
import Link from 'next/link';

import MenuIcon from '../icon/MenuIcon';
import SearchIcon from '../icon/SearchIcon';
import Drawer, { DrawerProps } from './Drawer';
import SearchBarModal from './SearchBarModal';
import SearchBar from './SearchBar';
import NoteIcon from '../icon/NoteIcon';
import ListSearchIcon from '../icon/ListSearchIcon';
import ReportMoneyIcon from '../icon/ReportMoneyIcon';
import FilePencilIcon from '../icon/FilePencilIcon';
import NewsIcon from '../icon/NewsIcon';
import Logout2Icon from '../icon/Logout2Icon';

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  const menuList: DrawerProps['menuList'] = [
    {
      label: '전체 장학금',
      iconSrc: '/icons/menu/all-scholarships-icon.svg',
      href: '/scholarships',
      color: 'default',
    },
    {
      label: '맞춤 장학금',
      iconSrc: '/icons/menu/articles-icon.svg',
      href: '/recommend',
      color: 'default',
    },
    {
      label: '내 장학금',
      iconSrc: '/icons/menu/my-scholarships-icon.svg',
      href: '/my-scholarships',
      color: 'default',
    },
    {
      label: '자기소개서',
      iconSrc: '/icons/menu/cover-letters-icon.svg',
      href: '/cover-letters',
      color: 'default',
    },
    {
      label: '아티클',
      iconSrc: '/icons/menu/articles-icon.svg',
      href: '/articles',
      color: 'default',
    },
    {
      label: '로그아웃',
      iconSrc: '/icons/menu/logout-icon.svg',
      href: '#',
      color: 'danger',
      topDivider: true,
      hidden: !isLoggedIn,
      screenOnly: 'MOBILE',
    },
  ];

  return (
    <>
      <div className="nav-bar">
        <nav className="fixed left-0 top-0 z-50 flex w-full justify-center bg-gray-00 px-4 py-3">
          <div className="flex w-full max-w-screen-lg flex-col gap-4">
            <div className="flex items-center justify-between">
              <Link href="/">
                <img
                  src="/logo/navbar-header-logo.svg"
                  alt="네비게이션 헤더 로고"
                />
              </Link>
              <div className="flex items-center gap-4 text-[1.5rem] lg:hidden">
                <button>
                  <SearchIcon onClick={() => setIsSearchBarOpen(true)} />
                </button>
                <button onClick={() => setIsDrawerOpen(true)}>
                  <MenuIcon />
                </button>
              </div>
              <div className="hidden lg:block">
                <SearchBar className="w-[15rem]" />
              </div>
            </div>
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-9">
                {menuList.map(
                  (menu, index) =>
                    menu.screenOnly !== 'MOBILE' &&
                    !menu.hidden && (
                      <li key={index} className="text-lg-200 text-gray-60">
                        <Link href={menu.href}>{menu.label}</Link>
                      </li>
                    ),
                )}
              </ul>
            </nav>
          </div>
        </nav>
        <div className="h-[68px] lg:h-[104px]" />
      </div>
      <Drawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        menuList={menuList}
        isLoggedIn={isLoggedIn}
      />
      <SearchBarModal
        isSearchBarOpen={isSearchBarOpen}
        setIsSearchBarOpen={setIsSearchBarOpen}
      />
    </>
  );
};

export default NavBar;
