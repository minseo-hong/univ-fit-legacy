'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import QuestionBox from '@/components/cover-letter/QuestionInput';
import Dropdown from '@/components/ui/Dropdown';
import BackButtonHeader from '@/components/ui/BackButtonHeader';
import PopUp from '@/components/ui/PopUp';
import GrayBackground from '@/components/ui/global-style/GrayBackground';

const CoverLetterNewPage = () => {
  const router = useRouter();

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const scholarshipItemList: string[] = [
    '미래에셋 해외 교환장학',
    '월곡주얼리장학생',
    '인문100년장학금',
  ];

  const handleBackButtonClick = () => {
    setIsPopUpOpen(true);
  };

  const handleSaveButtonClick = () => {
    router.back();
  };

  const handlePopUpConfirm = () => {
    setIsPopUpOpen(false);
    router.back();
  };

  const handlePopUpCancel = () => {
    setIsPopUpOpen(false);
  };

  return (
    <div>
      <GrayBackground />
      <div>
        <header className="fixed w-full bg-gray-00">
          <BackButtonHeader
            backButton={{ label: '자기소개서', onClick: handleBackButtonClick }}
            confirmButton={{
              label: '저장',
              onClick: handleSaveButtonClick,
            }}
            fixed={false}
          />
          <div className="px-4">
            <div className="mx-auto max-w-screen-lg">
              <div className="px-2 py-2">
                <Dropdown
                  itemList={scholarshipItemList}
                  selectedIndex={selectedIndex}
                  setSelectedIndex={setSelectedIndex}
                  placeholder="장학금을 선택하세요"
                />
              </div>
              <div className="px-2 py-4">
                <input
                  type="text"
                  className="title-sm-200 w-full text-gray-80 outline-none placeholder:text-gray-40"
                  placeholder="제목을 입력하세요"
                />
              </div>
            </div>
          </div>
        </header>
        <div className="h-[166.5px]" />
      </div>
      <main className="w-full p-4">
        <div className="mx-auto max-w-screen-lg">
          {selectedIndex !== null && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <QuestionBox key={index} maxAnswerLength={1000} input />
              ))}
            </div>
          )}
        </div>
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
