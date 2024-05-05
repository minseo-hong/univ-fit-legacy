import Link from 'next/link';

import ArticleItem from '@/components/home/ArticleItem';
import ScholarItem from '@/components/home/ScholarItem';

const Home = () => {
  return (
    <main>
      <section className="px-3 pb-6 pt-2">
        <div className="h-[5rem] w-full overflow-hidden rounded-2xl">
          <img
            src="/images/placeholders/placeholder-ad.png"
            alt="상단 배너 광고 이미지"
            className="h-full w-full object-cover"
          />
        </div>
      </section>
      <section className="bg-gray-05 p-4">
        <div className="flex justify-between">
          <h1 className="text-gray-80 title-md-300">인기 장학금 공고</h1>
          <Link href="#" className="text-gray-30 text-lg-200">
            전체보기
          </Link>
        </div>
        <ul className="mt-4 flex flex-col gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <ScholarItem key={index} as="li" />
          ))}
        </ul>
      </section>
      <section className="px-4 py-6 pb-16">
        <div className="flex justify-between px-2">
          <div className="flex items-end gap-2">
            <h1 className="text-gray-80 title-md-300">아티클</h1>
            <span className="text-md-200 text-gray-40">장학금 지원 A-Z!</span>
          </div>
          <Link href="#" className="text-gray-30 text-lg-200">
            전체보기
          </Link>
        </div>
        <ul className="mt-4 flex w-[calc(100vw-1rem)] gap-4 overflow-x-scroll">
          {Array.from({ length: 3 }).map((_, index) => (
            <ArticleItem key={index} as="li" />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Home;
