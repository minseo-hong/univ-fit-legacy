'use client';

import { useState } from 'react';
import Link from 'next/link';

import MenuIcon from '../icon/MenuIcon';
import SearchIcon from '../icon/SearchIcon';
import Drawer from './Drawer';
import SearchBarModal from './SearchBarModal';
import SearchBar from './SearchBar';

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState<boolean>(false);

  const menuList: { title: string; href: string }[] = [
    {
      title: '전체 장학금',
      href: '/scholarships',
    },
    {
      title: '맞춤 장학금',
      href: '#',
    },
    {
      title: '내 장학금',
      href: '/my-scholarships',
    },
    {
      title: '자기소개서',
      href: '/cover-letters',
    },
    {
      title: '아티클',
      href: '#',
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
                {menuList.map((menu, index) => (
                  <li key={index} className="text-lg-200 text-gray-60">
                    <Link href={menu.href}>{menu.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </nav>
        <div className="h-[68px] lg:h-[104px]" />
      </div>
      <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <SearchBarModal
        isSearchBarOpen={isSearchBarOpen}
        setIsSearchBarOpen={setIsSearchBarOpen}
      />
    </>
  );
};

export default NavBar;
