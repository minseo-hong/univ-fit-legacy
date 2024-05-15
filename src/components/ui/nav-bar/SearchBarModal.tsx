import clsx from 'clsx';
import { useEffect, useRef } from 'react';

import SearchIcon from '../icon/SearchIcon';

interface SearchBarWindowProps {
  isSearchBarOpen: boolean;
  setIsSearchBarOpen: (isSearchBarOpen: boolean) => void;
}

const SearchBarModal = ({
  isSearchBarOpen,
  setIsSearchBarOpen,
}: SearchBarWindowProps) => {
  const searchBarInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchBarOpen && searchBarInputRef.current) {
      searchBarInputRef.current.focus();
    }
  }, [isSearchBarOpen]);

  return (
    <div
      className={clsx(
        'fixed left-0 top-0 h-screen w-full bg-black bg-opacity-50 px-5 pt-[4rem] transition-opacity',
        {
          'opacity-100': isSearchBarOpen,
          'pointer-events-none opacity-0': !isSearchBarOpen,
        },
      )}
      onClick={() => setIsSearchBarOpen(false)}
    >
      <div
        className="absolute mx-auto flex w-[calc(100%-2rem)] items-center gap-2 rounded-full bg-gray-00 p-4 text-gray-80 placeholder:text-gray-40"
        buttonStyle={{
          boxShadow: '0px 6px 16px 0px rgba(0, 0, 0, 0.10)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-[1rem] text-gray-40">
          <SearchIcon />
        </span>
        <input
          ref={searchBarInputRef}
          type="text"
          placeholder="검색어를 입력하세요..."
          className="text-md-200 flex-1 bg-transparent outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBarModal;
