import Image from 'next/image';

import DotsMenuWrapper from '@/components/cover-letter/DotsMenuWrapper';
import HeaderHide from '@/components/my-scholarships/HeaderHide';
import BackButtonHeader from '@/components/ui/BackButtonHeader';
import Button from '@/components/ui/Button';
import Divider from '@/components/ui/Divider';
import WhiteBackground from '@/components/ui/global-style/WhiteBackground';
import BookmarkFilledIcon from '@/components/ui/icon/BookmarkFilledIcon';
import ChevronRightIcon from '@/components/ui/icon/ChevronRightIcon';
import FileDescriptionIcon from '@/components/ui/icon/FileDescriptionIcon';
import MessageDotsIcon from '@/components/ui/icon/MessageDotsIcon';
import PencilIcon from '@/components/ui/icon/PencilIcon';
import Link from 'next/link';

const MyScholarshipPage = () => {
  const coverLetterList: {
    id: number;
    name: string;
    date: string;
  }[] = [
    {
      id: 1,
      name: '자기소개서 제목',
      date: '2024.03.22',
    },
    {
      id: 2,
      name: '자기소개서 제목',
      date: '2024.03.22',
    },
    {
      id: 3,
      name: '자기소개서 제목',
      date: '2024.03.22',
    },
    {
      id: 4,
      name: '자기소개서 제목',
      date: '2024.03.22',
    },
  ];

  return (
    <main className="pb-16">
      <HeaderHide />
      <WhiteBackground />
      <BackButtonHeader
        backButton={{
          label: '내 장학금',
          backUrl: '-1',
        }}
        fixed
      />
      <div className="mx-auto max-w-screen-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
          <div className="relative aspect-square w-full">
            <Image
              src="/images/placeholders/placeholder-image.png"
              alt="임시 장학금 이미지"
              fill
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between px-4 py-4 pb-0 md:px-0">
                <div className="flex items-center gap-1 rounded-lg border border-gray-10 px-4 py-2 text-gray-40">
                  <span className="text-lg-200">지원 예정</span>
                  <span>
                    <ChevronRightIcon />
                  </span>
                </div>
                <div>
                  <span className="text-[1.5rem] text-primary">
                    <BookmarkFilledIcon />
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3 px-4 py-4 md:px-0">
                <div className="text-lg-200 text-gray-40">
                  미래에셋박현주재단
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="title-sm-300 text-gray-80">
                    미래에셋 해외 교환장학
                  </h1>
                  <div className="text-md-200 text-gray-40">
                    2024.04.24 ~ 2024.04.30
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex w-full items-center justify-center gap-1 border border-gray-05 py-4 text-gray-40">
                <span className="text-md-200">공고로 이동하기</span>
                <span>
                  <ChevronRightIcon />
                </span>
              </div>
              <div className="px-4 py-6 md:px-0">
                <Button variant="light-primary">
                  <div className="flex items-center gap-1">
                    <span className="text-[1.25rem]">
                      <MessageDotsIcon />
                    </span>
                    <span>후기 작성하기</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          <Divider />
        </div>
        <div className="flex items-center justify-between p-4">
          <h2 className="title-sm-300 text-gray-80">작성한 자기소개서</h2>
          <Link
            href="/cover-letters/new"
            className="flex items-center gap-1 text-primary"
          >
            <span className="text-[1.125rem]">
              <PencilIcon />
            </span>
            <span className="text-md-200">작성하기</span>
          </Link>
        </div>
        <ul>
          {coverLetterList.map((coverLetter) => (
            <li
              key={coverLetter.id}
              className="border-b border-gray-05 last:border-b-0"
            >
              <Link
                href={`/cover-letters/${coverLetter.id}`}
                className="flex flex-col gap-2 px-6 py-5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-[1.25rem] text-gray-30">
                      <FileDescriptionIcon />
                    </span>
                    <h2 className="text-lg-200 text-gray-80">
                      {coverLetter.name}
                    </h2>
                  </div>
                  <DotsMenuWrapper coverLetterId={coverLetter.id} />
                </div>
                <div className="text-md-200 flex items-center gap-2 text-gray-30">
                  <span>{coverLetter.date}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default MyScholarshipPage;
