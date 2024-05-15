'use client';

import Link from 'next/link';
import { useState } from 'react';

import NavBarHide from '@/components/ui/global-style/NavBarHide';
import XIcon from '@/components/ui/icon/XIcon';
import Dropdown from '@/components/cover-letter/ScholarshipDropdown';
import FormControl from '@/components/ui/FormControl';
import Input from '@/components/ui/Input';
import TextArea from '@/components/ui/TextArea';
import DialogHeader from '@/components/DialogHeader';

const DocumentNewPage = () => {
  const [selectedIndexGroup, setSelectedIndexGroup] = useState<{
    document: number | null;
    year: number | null;
    month: number | null;
    day: number | null;
  }>({
    document: null,
    year: null,
    month: null,
    day: null,
  });

  const documentItemList: string[] = [
    '직접 입력',
    '성적증명서',
    '재학증명서',
    '건강보험료 납입증명서',
    '건강보험료 자격득실확인서',
    '가족관계증명서',
    '주민등록등본',
    '학자금 지원구간(소득분위)통지서',
    '기초생활수급자 증명서',
    '차상위계층 증명서',
    '한부모가족 증명서',
    '장애인 증명서',
    '국가유공자 확인서',
  ];

  const yearList = Array.from({ length: 50 }, (_, i) => `${2024 - i}`);
  const monthList = Array.from({ length: 12 }, (_, i) => `${i + 1}`);
  const dayList = Array.from({ length: 31 }, (_, i) => `${i + 1}`);

  const setDocumentSelectedIndex = (selectedIndex: number | null) => {
    setSelectedIndexGroup({ ...selectedIndexGroup, document: selectedIndex });
  };

  const setYearSelectedIndex = (selectedIndex: number | null) => {
    setSelectedIndexGroup({ ...selectedIndexGroup, year: selectedIndex });
  };

  const setMonthSelectedIndex = (selectedIndex: number | null) => {
    setSelectedIndexGroup({ ...selectedIndexGroup, month: selectedIndex });
  };

  const setDaySelectedIndex = (selectedIndex: number | null) => {
    setSelectedIndexGroup({ ...selectedIndexGroup, day: selectedIndex });
  };

  return (
    <div>
      <DialogHeader title="서류 등록" closeHref="/me/documents" />
      <main className="px-6 py-4">
        <div className="flex flex-col gap-10">
          <FormControl label="서류명" required>
            <div className="flex flex-col gap-2">
              <Dropdown
                itemList={documentItemList}
                selectedIndex={selectedIndexGroup.document}
                setSelectedIndex={setDocumentSelectedIndex}
                placeholder="서류를 선택해주세요"
              />
              {selectedIndexGroup.document === 0 && (
                <Input placeholder="서류 이름을 입력해주세요." />
              )}
            </div>
          </FormControl>
          <FormControl label="발급 날짜" required>
            <div className="grid grid-cols-7 items-center gap-2">
              <Dropdown
                itemList={yearList}
                selectedIndex={selectedIndexGroup.year}
                setSelectedIndex={setYearSelectedIndex}
                className="col-span-3"
                placeholder="년도"
              />
              <Dropdown
                itemList={monthList}
                selectedIndex={selectedIndexGroup.month}
                setSelectedIndex={setMonthSelectedIndex}
                className="col-span-2"
                placeholder="월"
              />
              <Dropdown
                itemList={dayList}
                selectedIndex={selectedIndexGroup.day}
                setSelectedIndex={setDaySelectedIndex}
                className="col-span-2"
                placeholder="일"
              />
            </div>
          </FormControl>
          <FormControl label="발급 기관">
            <Input placeholder="발급 기관을 입력해주세요." />
          </FormControl>
          <FormControl label="메모">
            <TextArea placeholder="메모를 남겨보세요." rows={5} />
          </FormControl>
        </div>
      </main>
    </div>
  );
};

export default DocumentNewPage;
