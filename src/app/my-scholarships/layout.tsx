import clsx from 'clsx';
import Link from 'next/link';

import ReportMoneyIcon from '@/components/ui/icon/ReportMoneyIcon';
import GrayBackground from '@/components/ui/global-style/GrayBackground';

const MyScholarshipsLayout = ({ children }: { children: React.ReactNode }) => {
  const topMenuList: {
    label: string;
    href: string;
    active?: boolean;
  }[] = [
    {
      label: '지원 일정',
      href: '/my-scholarships/date',
      active: true,
    },
    {
      label: '지원 목록',
      href: '#',
    },
    {
      label: '찜한 공고',
      href: '#',
    },
  ];

  return (
    <div>
      <GrayBackground />
      <header className="h-[5.5rem]">
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
      {children}
    </div>
  );
};

export default MyScholarshipsLayout;
