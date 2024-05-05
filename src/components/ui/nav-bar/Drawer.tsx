import clsx from 'clsx';

import ChevronRightIcon from '../icon/ChevronRightIcon';
import FilePencilIcon from '../icon/FilePencilIcon';
import HomeIcon from '../icon/HomeIcon';
import ListSearchIcon from '../icon/ListSearchIcon';
import NewsIcon from '../icon/NewsIcon';
import ReportMoneyIcon from '../icon/ReportMoneyIcon';
import DrawerMenuItem from './DrawerMenuItem';

interface DrawerProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isDrawerOpen: boolean) => void;
}

const Drawer = ({ isDrawerOpen, setIsDrawerOpen }: DrawerProps) => {
  return (
    <div
      className={clsx(
        'fixed right-0 top-0 flex h-screen w-full justify-end bg-black bg-opacity-50 transition-all duration-300',
        {
          'bg-opacity-50': isDrawerOpen,
          'pointer-events-none bg-opacity-0': !isDrawerOpen,
        },
      )}
      onClick={() => setIsDrawerOpen(false)}
    >
      <div
        className={clsx('bg-gray-00 w-[20rem] transition-all duration-300', {
          'translate-x-0': isDrawerOpen,
          'translate-x-full': !isDrawerOpen,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-4 pb-3 pl-6 pr-4 pt-5">
          <div className="aspect-square w-[3rem] overflow-hidden rounded-full">
            <img
              src="/images/placeholders/placeholder-image.png"
              alt="프로필 이미지"
            />
          </div>
          <div className="text-gray-40 text-lg-200 flex-1">
            로그인 후 이용해주세요.
          </div>
          <div>
            <span className="text-gray-40 text-[1.5rem]">
              <ChevronRightIcon />
            </span>
          </div>
        </div>
        <ul>
          <DrawerMenuItem icon={<HomeIcon />}>홈</DrawerMenuItem>
          <DrawerMenuItem icon={<ListSearchIcon />}>장학금 공고</DrawerMenuItem>
          <DrawerMenuItem icon={<NewsIcon />}>아티클</DrawerMenuItem>
          <DrawerMenuItem icon={<ReportMoneyIcon />}>내 장학금</DrawerMenuItem>
          <DrawerMenuItem icon={<FilePencilIcon />}>자기소개서</DrawerMenuItem>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
