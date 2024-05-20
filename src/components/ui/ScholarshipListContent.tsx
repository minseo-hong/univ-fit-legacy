import Link from 'next/link';
import Filter from '../scholarship/list/Filter';
import SortDropdown from '../scholarship/list/SortDropdown';
import GrayBackground from './global-style/GrayBackground';
import NoteIcon from './icon/NoteIcon';
import Capsule from './Capsule';
import FavoriteButtonWrapper from './FavoriteButtonWrapper';
import Image from 'next/image';

export interface ScholarshipListContentProps {
  title: string;
  icon: React.ReactNode;
  filterList: string[];
  scholarshipList: {
    id: number;
    title: string;
    foundation: string;
    imageSrc: string;
    period: string;
    dDay: number;
    status: 'OPEN' | 'NONE';
    isFavorite: boolean;
  }[];
}

const ScholarshipListContent = ({
  title,
  icon,
  filterList,
  scholarshipList,
}: ScholarshipListContentProps) => {
  return (
    <div>
      <GrayBackground />
      <header>
        <div className="fixed h-[6.625rem] w-full bg-gray-00 px-4">
          <div className="mx-auto max-w-screen-lg">
            <div className="flex items-center justify-between border-b border-gray-05 pb-4 pt-3">
              <div className="flex items-center justify-start gap-2">
                <span className="text-[1.5rem]">{icon}</span>
                <h1 className="title-md-300 text-gray-80">{title}</h1>
                <span className="title-md-100 text-gray-30">
                  {scholarshipList.length}
                </span>
              </div>
              <SortDropdown />
            </div>
            <div className="pb-4 pt-2">
              <Filter filterList={filterList} />
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

export default ScholarshipListContent;
