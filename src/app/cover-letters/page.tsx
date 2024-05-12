import DotsMenuButton from '@/components/cover-letter/DotsMenuButton';
import Capsule from '@/components/ui/Capsule';
import FileDescriptionIcon from '@/components/ui/icon/FileDescriptionIcon';
import FilePencilIcon from '@/components/ui/icon/FilePencilIcon';
import PencilIcon from '@/components/ui/icon/PencilIcon';
import Link from 'next/link';

const CoverLettersPage = () => {
  const coverLetterList: {
    id: number;
    title: string;
    organization: string;
    date: string;
  }[] = [
    {
      id: 1,
      title: '얼곡주얼리 초안',
      organization: '월곡주얼리장학생 | 월곡주얼리산업진흥재단',
      date: '2024.03.22',
    },
    {
      id: 2,
      title: '얼곡주얼리 초안',
      organization: '월곡주얼리장학생 | 월곡주얼리산업진흥재단',
      date: '2024.03.22',
    },
    {
      id: 3,
      title: '얼곡주얼리 초안',
      organization: '월곡주얼리장학생 | 월곡주얼리산업진흥재단',
      date: '2024.03.22',
    },
    {
      id: 4,
      title: '얼곡주얼리 초안',
      organization: '월곡주얼리장학생 | 월곡주얼리산업진흥재단',
      date: '2024.03.22',
    },
    {
      id: 5,
      title: '얼곡주얼리 초안',
      organization: '월곡주얼리장학생 | 월곡주얼리산업진흥재단',
      date: '2024.03.22',
    },
  ];

  return (
    <div>
      <header className="flex items-center gap-1 p-4 py-3 text-gray-80">
        <span className="text-[1.5rem]">
          <FilePencilIcon />
        </span>
        <h1 className="title-md-300">자기소개서</h1>
      </header>
      <main>
        <ul>
          {coverLetterList.map((coverLetter) => (
            <li key={coverLetter.id}>
              <Link
                href={`/cover-letters/${coverLetter.id}`}
                className="flex flex-col gap-2 border-t border-gray-05 px-6 py-5 last:border-b"
              >
                <div className="flex items-center gap-1">
                  <span className="text-[1.25rem] text-gray-30">
                    <FileDescriptionIcon />
                  </span>
                  <h2 className="text-lg-200 flex-1 text-gray-80">
                    {coverLetter.title}
                  </h2>
                  <DotsMenuButton coverLetterId={coverLetter.id} />
                </div>
                <div className="text-md-200 text-gray-40">
                  {coverLetter.organization}
                </div>
                <div className="text-md-200 text-gray-30">
                  {coverLetter.date}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="fixed bottom-8 left-1/2 z-30 -translate-x-1/2">
          <Capsule
            href="/cover-letters/new"
            size="lg"
            style="primary"
            className="flex items-center gap-1 shadow-[0px_8px_16px_0px_rgba(0,0,0,0.10)]"
          >
            <span className="text-[1.5rem]">
              <PencilIcon />
            </span>
            <span className="title-sm-300">새로 쓰기</span>
          </Capsule>
        </div>
      </main>
    </div>
  );
};

export default CoverLettersPage;
