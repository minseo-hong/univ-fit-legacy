'use client';

import { useState } from 'react';

import MenuIcon from '../icon/MenuIcon';
import SearchIcon from '../icon/SearchIcon';
import Drawer from '../drawer/Drawer';

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="flex items-center justify-between px-4 py-3">
        <div>
          <img src="/logo/navbar-header-logo.svg" alt="네비게이션 헤더 로고" />
        </div>
        <div className="flex items-center gap-4 text-[1.5rem]">
          <button>
            <SearchIcon />
          </button>
          <button onClick={() => setIsDrawerOpen(true)}>
            <MenuIcon />
          </button>
        </div>
      </nav>
      <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
    </>
  );
};

export default NavBar;
