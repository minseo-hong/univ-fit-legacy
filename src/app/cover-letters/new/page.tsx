'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import QuestionInput from '@/components/cover-letter/QuestionInput';
import ScholarshipDropdown from '@/components/cover-letter/ScholarshipDropdown';
import BackButtonHeader from '@/components/ui/BackButtonHeader';
import PopUp from '@/components/ui/PopUp';

const CoverLetterNewPage = () => {
  const router = useRouter();

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleBackButtonClick = () => {
    setIsPopUpOpen(true);
  };

  const handleSaveButtonClick = () => {
    router.push('/cover-letters');
  };

  const handlePopUpConfirm = () => {
    router.push('/cover-letters');
    setIsPopUpOpen(false);
  };

  const handlePopUpCancel = () => {
    setIsPopUpOpen(false);
  };

  return (
    <div>
      <div>
        <header className="fixed top-[4rem] w-full bg-gray-00">
          <BackButtonHeader
            backButton={{ label: '자기소개서', onClick: handleBackButtonClick }}
            confirmButton={{
              label: '저장',
              onClick: handleSaveButtonClick,
            }}
            fixed={false}
          />
          <div className="px-6 py-2">
            <ScholarshipDropdown
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          </div>
          <div className="px-6 py-4">
            <input
              type="text"
              className="title-sm-200 w-full text-gray-80 outline-none placeholder:text-gray-40"
              placeholder="제목을 입력하세요"
            />
          </div>
        </header>
        <div className="h-[166.5px]" />
      </div>
      <main className="min-h-[calc(100vh-4rem-166.5px)] w-full bg-gray-05 p-4">
        {selectedIndex !== null && (
          <div className="flex flex-col gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <QuestionInput key={index} maxAnswerLength={1000} />
            ))}
          </div>
        )}
      </main>
      {isPopUpOpen && (
        <PopUp
          confirmButton={{ label: '나가기' }}
          cancelButton={{ label: '취소' }}
          onConfirm={handlePopUpConfirm}
          onCancel={handlePopUpCancel}
        >
          작성하던 내용이 저장되지 않았습니다.
          <br />
          페이지에서 나가시겠습니까?
        </PopUp>
      )}
    </div>
  );
};

export default CoverLetterNewPage;
