'use client';

import clsx from 'clsx';
import { useState } from 'react';
import Image from 'next/image';

import Badge from '@/components/ui/badge/Badge';
import FavoriteHeartButton from '@/components/ui/favorite/FavoriteHeartButton';
import Link from 'next/link';

const ScholarshipListPage = () => {
  const rawScholarshipList: {
    id: number;
    title: string;
    organization: string;
    imageSrc: string;
    period: string;
    dDay: number;
    status: 'OPEN' | 'NONE';
    isFavorite: boolean;
  }[] = [
    {
      id: 1,
      title: '장학금명',
      organization: '재단명',
      imageSrc: '/images/placeholders/placeholder-image.png',
      period: '2024.04.01 ~ 2026.04.01',
      dDay: 12,
      status: 'OPEN',
      isFavorite: true,
    },
    {
      id: 2,
      title: '장학금명',
      organization: '재단명',
      imageSrc: '/images/placeholders/placeholder-image.png',
      period: '2024.04.01 ~ 2026.04.01',
      dDay: 12,
      status: 'OPEN',
      isFavorite: false,
    },
    {
      id: 3,
      title: '장학금명',
      organization: '재단명',
      imageSrc: '/images/placeholders/placeholder-image.png',
      period: '2024.04.01 ~ 2026.04.01',
      dDay: 12,
      status: 'NONE',
      isFavorite: true,
    },
    {
      id: 4,
      title: '장학금명',
      organization: '재단명',
      imageSrc: '/images/placeholders/placeholder-image.png',
      period: '2024.04.01 ~ 2026.04.01',
      dDay: 12,
      status: 'NONE',
      isFavorite: false,
    },
  ];

  const [tabActiveIndex, setTabActiveIndex] = useState<number>(0);
  const [scholarshipList, setScholarshipList] =
    useState<typeof rawScholarshipList>(rawScholarshipList);

  const tabMenuList: { label: string }[] = [{ label: '전체' }, { label: '찜' }];

  const filteredScholarshipList =
    tabActiveIndex === 1
      ? scholarshipList.filter((scholarship) => scholarship.isFavorite)
      : scholarshipList;

  const handleTabMenuClick = (index: number) => {
    setTabActiveIndex(index);
  };

  const handleFavoriteClick = (
    e: React.MouseEvent<HTMLDivElement>,
    id: number,
  ) => {
    e.preventDefault();
    const updatedScholarshipList = scholarshipList.map((scholarship) =>
      scholarship.id === id
        ? { ...scholarship, isFavorite: !scholarship.isFavorite }
        : scholarship,
    );
    setScholarshipList(updatedScholarshipList);
  };

  return (
    <div className="bg-gray-05 px-4 pt-6">
      <main className="min-h-[calc(100vh-4rem)]">
        <div className="flex items-center gap-3">
          {tabMenuList.map((tabMenu, index) => (
            <span
              key={index}
              className={clsx('title-md-300', {
                'text-gray-80': tabActiveIndex === index,
                'text-gray-30': tabActiveIndex !== index,
              })}
              onClick={() => handleTabMenuClick(index)}
            >
              {tabMenu.label}
            </span>
          ))}
        </div>
        <ul className="mt-4 flex flex-col gap-4">
          {filteredScholarshipList.map((scholarship) => (
            <li>
              <Link
                href={`/scholarships/${scholarship.id}`}
                className="block rounded-2xl bg-white p-4"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge size="sm">D-{scholarship.dDay}</Badge>
                      {scholarship.status === 'OPEN' && (
                        <Badge style="stroke-success" size="sm">
                          신청가능
                        </Badge>
                      )}
                    </div>
                    <FavoriteHeartButton
                      isFavorite={scholarship.isFavorite}
                      onClick={(e) => handleFavoriteClick(e, scholarship.id)}
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
                        {scholarship.organization}
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
