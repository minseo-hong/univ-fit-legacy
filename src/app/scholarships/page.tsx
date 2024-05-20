import Image from 'next/image';

import Capsule from '@/components/ui/Capsule';
import Link from 'next/link';
import NoteIcon from '@/components/ui/icon/NoteIcon';
import GrayBackground from '@/components/ui/global-style/GrayBackground';
import Filter from '@/components/scholarship/list/Filter';
import FavoriteButtonWrapper from '@/components/scholarship/list/FavoriteButtonWrapper';
import SortDropdown from '@/components/scholarship/list/SortDropdown';

const ScholarshipListPage = () => {
  const scholarshipList: {
    id: number;
    title: string;
    foundation: string;
    imageSrc: string;
    period: string;
    dDay: number;
    status: 'OPEN' | 'NONE';
    isFavorite: boolean;
  }[] = [
    {
      id: 1,
      title: '장학금명',
      foundation: '재단명',
      imageSrc: '/images/placeholders/placeholder-image.png',
      period: '2024.04.01 ~ 2026.04.01',
      dDay: 12,
      status: 'OPEN',
      isFavorite: true,
    },
    {
      id: 2,
      title: '장학금명',
      foundation: '재단명',
      imageSrc: '/images/placeholders/placeholder-image.png',
      period: '2024.04.01 ~ 2026.04.01',
      dDay: 12,
      status: 'OPEN',
      isFavorite: false,
    },
    {
      id: 3,
      title: '장학금명',
      foundation: '재단명',
      imageSrc: '/images/placeholders/placeholder-image.png',
      period: '2024.04.01 ~ 2026.04.01',
      dDay: 12,
      status: 'NONE',
      isFavorite: true,
    },
    {
      id: 4,
      title: '장학금명',
      foundation: '재단명',
      imageSrc: '/images/placeholders/placeholder-image.png',
      period: '2024.04.01 ~ 2026.04.01',
      dDay: 12,
      status: 'NONE',
      isFavorite: false,
    },
  ];

  return (
    <div>
      <GrayBackground />
      <header>
        <div className="fixed h-[6.625rem] w-full bg-gray-00 px-4">
          <div className="mx-auto max-w-screen-lg">
            <div className="flex items-center justify-between border-b border-gray-05 pb-4 pt-3">
              <div className="flex items-center justify-start gap-2">
                <span className="text-[1.5rem]">
                  <NoteIcon />
                </span>
                <h1 className="title-md-300 text-gray-80">전체 장학금</h1>
                <span className="title-md-100 text-gray-30">1,201</span>
              </div>
              <SortDropdown />
            </div>
            <div className="pb-4 pt-2">
              <Filter />
            </div>
          </div>
        </div>
        <div className="h-[7rem]" />
      </header>
      <main className="p-4">
        <ul className="mx-auto grid max-w-screen-lg grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {scholarshipList.map((scholarship) => (
            <li key={scholarship.id}>
              <Link
                href={`/scholarships/${scholarship.id}`}
                className="block rounded-2xl bg-white p-4"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Capsule size="sm">D-{scholarship.dDay}</Capsule>
                      {scholarship.status === 'OPEN' && (
                        <Capsule variant="stroke-success" size="sm">
                          신청가능
                        </Capsule>
                      )}
                    </div>
                    <FavoriteButtonWrapper
                      isFavorite={scholarship.isFavorite}
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src={scholarship.imageSrc}
                        alt={scholarship.title}
                        width={64}
                        height={64}
                      />
                    </div>
                    <div>
                      <h2 className="text-md-300 text-gray-70">
                        {scholarship.title}
                      </h2>
                      <div className="text-md-200 text-gray-40">
                        {scholarship.foundation}
                      </div>
                      <div className="caption-200 text-gray-30">
                        {scholarship.period}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default ScholarshipListPage;
