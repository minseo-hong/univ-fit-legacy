import clsx from 'clsx';

import CheckboxIcon from '@/components/ui/icon/CheckboxIcon';
import ChevronRightIcon from '@/components/ui/icon/ChevronRightIcon';
import SquareIcon from '@/components/ui/icon/SquareIcon';

interface DocumentListProps {
  title: string;
  documentList: {
    name: string;
    isChecked: boolean;
    isRequired: boolean;
  }[];
}

const DocumentList = ({ title, documentList }: DocumentListProps) => {
  return (
    <div>
      <h2 className="title-sm-300 text-gray-80">{title}</h2>
      <ul className="mt-4 flex flex-col gap-4">
        {documentList.map((document, index) => (
          <li
            key={index}
            className={clsx(
              'flex items-center justify-between gap-2 rounded-2xl px-4 py-6',
              {
                'border border-gray-10 bg-gray-00': !document.isChecked,
                'bg-success-01': document.isChecked,
              },
            )}
          >
            <span
              className={clsx('text-[1.5rem]', {
                'text-gray-20': !document.isChecked,
                'text-success-60': document.isChecked,
              })}
            >
              {document.isChecked ? <CheckboxIcon /> : <SquareIcon />}
            </span>
            <span
              className={clsx('text-lg-200 flex-1', {
                'text-gray-50': !document.isChecked,
                'text-success-60': document.isChecked,
              })}
            >
              {document.name}
            </span>
            <span
              className={clsx('text-[1.5rem] text-gray-40', {
                'text-gray-40': !document.isChecked,
                'text-success-60': document.isChecked,
              })}
            >
              <ChevronRightIcon />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;
