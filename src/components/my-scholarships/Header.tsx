'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ReportMoneyIcon from '../ui/icon/ReportMoneyIcon';

const Header = () => {
  const pathname = usePathname();

  const topMenuList: {
    label: string;
    href: string;
    active?: boolean;
  }[] = [
    {
      label: '지원 일정',
      href: '/my-scholarships/date',
      active: pathname === '/my-scholarships/date',
    },
    {
      label: '지원 목록',
      href: '/my-scholarships/list',
      active: pathname === '/my-scholarships/list',
    },
    {
      label: '찜한 공고',
      href: '/my-scholarships/favorite',
      active: pathname === '/my-scholarships/favorite',
    },
  ];

  return (
    <header className="my-scholarships-header h-[5.5rem]">
      <div className="fixed w-full bg-gray-00">
        <div className="flex items-center gap-1 p-4 py-3">
          <span className="text-[1.5rem]">
            <ReportMoneyIcon />
          </span>
          <h1 className="title-md-300 text-gray-80">내 장학금</h1>
        </div>
        <nav>
          <ul className="flex items-center gap-3 p-4 pt-0">
            {topMenuList.map((menu, index) => (
              <li key={index}>
                <Link
                  href={menu.href}
                  className={clsx({
                    'title-sm-300 text-gray-70': menu.active,
                    'title-sm-200 text-gray-30': !menu.active,
                  })}
                >
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
