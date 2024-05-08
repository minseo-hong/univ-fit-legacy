'use client';

import { useState } from 'react';

import MenuIcon from '../icon/MenuIcon';
import SearchIcon from '../icon/SearchIcon';
import Drawer from './Drawer';
import SearchBarModal from './SearchBarModal';

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="fixed left-0 top-0 z-50 flex h-[4rem] w-full items-center justify-between bg-gray-00 px-4">
        <div>
          <img src="/logo/navbar-header-logo.svg" alt="네비게이션 헤더 로고" />
        </div>
        <div className="flex items-center gap-4 text-[1.5rem]">
          <button>
            <SearchIcon onClick={() => setIsSearchBarOpen(true)} />
          </button>
          <button onClick={() => setIsDrawerOpen(true)}>
            <MenuIcon />
          </button>
        </div>
      </nav>
      <div className="h-[4rem]" />
      <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <SearchBarModal
        isSearchBarOpen={isSearchBarOpen}
        setIsSearchBarOpen={setIsSearchBarOpen}
      />
    </>
  );
};

export default NavBar;
