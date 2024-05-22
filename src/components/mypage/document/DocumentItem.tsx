'use client';

import { useState } from 'react';

import FileDescriptionIcon from '@/components/ui/icon/FileDescriptionIcon';
import DotsMenuWrapper from './DotsMenuWrapper';
import XIcon from '@/components/ui/icon/XIcon';

interface DocumentItemProps {
  document: {
    id: number;
    name: string;
    date: string;
    organization: string | null;
  };
}

const DocumentItem = ({ document }: DocumentItemProps) => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const contentList: {
    label: string;
    content: string;
  }[] = [
    {
      label: '발급 날짜',
      content: '2023.12.20',
    },
    {
      label: '발급 기관',
      content: '서울대학교',
    },
    {
      label: '메모',
      content: '상아장학재단 IT 장학금 신청할 때 쓰려고 발급',
    },
  ];

  const handleOpenDetailModal = () => {
    setIsDetailOpen(true);
  };

  const handleCloseDetailModal = () => {
    setIsDetailOpen(false);
  };

  return (
    <li key={document.id} className="border-b border-gray-05 last:border-b-0">
      <div
        className="cursor-pointer px-6 py-5 lg:px-2"
        onClick={handleOpenDetailModal}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-[1.25rem] text-gray-30">
              <FileDescriptionIcon />
            </span>
            <h2 className="text-lg-200 text-gray-80">{document.name}</h2>
          </div>
          <DotsMenuWrapper documentId={document.id} />
        </div>
        <div className="text-md-200 flex items-center gap-2 text-gray-40">
          <span>{document.date}</span>
          <span>{document.organization}</span>
        </div>
      </div>
      {isDetailOpen && (
        <div
          className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseDetailModal}
        >
          <div
            className="flex w-[20rem] flex-col gap-6 rounded-2xl bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="title-sm-200 flex items-center justify-between text-gray-60">
              <h1 className="title-sm-300 text-gray-80">성적증명서</h1>
              <button onClick={handleCloseDetailModal}>
                <span className="text-[1.5rem] text-gray-40">
                  <XIcon />
                </span>
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {contentList.map((content, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h2 className="text-md-200 text-gray-40">{content.label}</h2>
                  <p className="text-md-200 text-gray-80">{content.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default DocumentItem;
