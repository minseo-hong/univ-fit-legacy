import FloatingActionButton from '@/components/ui/FloatingActionButton';
import DotsMenuWrapper from '@/components/mypage/document/DotsMenuWrapper';
import BackButtonHeader from '@/components/ui/BackButtonHeader';
import CheckupListIcon from '@/components/ui/icon/CheckupListIcon';
import FileDescriptionIcon from '@/components/ui/icon/FileDescriptionIcon';
import FilePlusIcon from '@/components/ui/icon/FilePlusIcon';
import DocumentItem from '@/components/mypage/document/DocumentItem';

const DocumentsPage = () => {
  const documentList: {
    id: number;
    name: string;
    date: string;
    organization: string | null;
  }[] = [
    {
      id: 1,
      name: '가족관계증명서',
      date: '2024.03.22',
      organization: '정부24',
    },
    {
      id: 2,
      name: '재학증명서',
      date: '2024.03.22',
      organization: null,
    },
    {
      id: 3,
      name: '성적증명서',
      date: '2024.03.22',
      organization: null,
    },
    {
      id: 4,
      name: '주민등록등본',
      date: '2024.03.22',
      organization: '정부24',
    },
    {
      id: 5,
      name: '주민등록초본',
      date: '2024.03.22',
      organization: '정부24',
    },
    {
      id: 6,
      name: '학자금지원구간 통지서',
      date: '2024.03.22',
      organization: '정부24',
    },
    {
      id: 7,
      name: '기초생활수급자 증명서',
      date: '2024.03.22',
      organization: '정부24',
    },
  ];

  return (
    <div className="pb-28">
      <div>
        <header className="fixed z-10 flex w-full flex-col bg-gray-00 pb-3">
          <BackButtonHeader
            backButton={{
              label: '마이페이지',
              backUrl: '/me',
            }}
            padding={false}
          />
          <div className="px-4">
            <div className="mx-auto flex w-full max-w-screen-lg items-center gap-1">
              <span className="text-[1.5rem]">
                <CheckupListIcon />
              </span>
              <h1 className="title-md-300 text-gray-80">서류 관리</h1>
            </div>
          </div>
        </header>
        <div className="h-[84px]" />
      </div>
      <main>
        <ul className="mx-auto max-w-screen-lg">
          {documentList.map((document) => (
            <DocumentItem key={document.id} document={document} />
          ))}
        </ul>
      </main>
      <FloatingActionButton
        href="/me/documents/new"
        icon={<FilePlusIcon />}
        label="서류 등록하기"
      />
    </div>
  );
};

export default DocumentsPage;
