import ChevronRightIcon from '@/components/ui/icon/ChevronRightIcon';
import PencilIcon from '@/components/ui/icon/PencilIcon';
import DocumentList from '../document-list/DocumentList';

const SubmissionTab = () => {
  const documentList: {
    name: string;
    isChecked: boolean;
    isRequired: boolean;
  }[] = [
    {
      name: '주민등록등본',
      isChecked: true,
      isRequired: true,
    },
    {
      name: '주민등록등본',
      isChecked: true,
      isRequired: true,
    },
    {
      name: '주민등록등본',
      isChecked: false,
      isRequired: true,
    },
    {
      name: '주민등록등본',
      isChecked: false,
      isRequired: true,
    },
    {
      name: '주민등록등본',
      isChecked: true,
      isRequired: false,
    },
    {
      name: '주민등록등본',
      isChecked: false,
      isRequired: false,
    },
    {
      name: '주민등록등본',
      isChecked: false,
      isRequired: false,
    },
  ];
  return (
    <div className="p-4">
      <button className="flex w-full items-center justify-between rounded-2xl bg-primary p-4 pl-6 text-gray-00">
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <span className="title-sm-300">자기소개서 작성하러가기</span>
            <span className="text-[1.5rem]">
              <ChevronRightIcon />
            </span>
          </div>
          <span className="text-md-200 text-primary-10">
            혜택을 받기 위해선 자기소개서가 필요해요.
          </span>
        </div>
        <div className="text-[3.75rem] text-primary-20">
          <PencilIcon strokeWidth={1.5} />
        </div>
      </button>
      <div className="mt-10 flex flex-col gap-10">
        <DocumentList
          title="필수 서류"
          documentList={documentList.filter((document) => document.isRequired)}
        />
        <DocumentList
          title="추가 서류"
          documentList={documentList.filter(
            (document) => document.isRequired === false,
          )}
        />
      </div>
    </div>
  );
};

export default SubmissionTab;
