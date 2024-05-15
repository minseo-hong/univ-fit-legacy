'use client';

import { useState } from 'react';

import DialogHeader from '@/components/DialogHeader';
import BinarySelect from '@/components/ui/BinarySelect';
import FormControl from '@/components/ui/FormControl';
import Dropdown from '@/components/cover-letter/ScholarshipDropdown';
import UnitInput from '@/components/ui/UnitInput';
import Input from '@/components/ui/Input';
import MultipleSelect from '@/components/ui/MultipleSelect';

const PrivacyPage = () => {
  const [value, setValue] = useState<{
    gender: number | null;
    year: number | null;
    city: number | null;
    area: number | null;
    familySize: string;
    universityType: number | null;
    universityCity: number | null;
    universityName: string;
    departmentGroup: number | null;
    department: string;
    enrollmentStatus: number | null;
    sememster: string;
    totalGpa: string;
    previousGpa: string;
    maxGpa: number | null;
    incomeBracket: number | null;
    supportIncomeBracket: number | null;
    monthlyIncome: string;
    socialSupportBracket: number | null;
  }>({
    gender: null,
    year: null,
    city: null,
    area: null,
    familySize: '',
    universityType: null,
    universityCity: null,
    universityName: '',
    department: '',
    departmentGroup: null,
    enrollmentStatus: null,
    sememster: '',
    totalGpa: '',
    previousGpa: '',
    maxGpa: null,
    incomeBracket: null,
    supportIncomeBracket: null,
    monthlyIncome: '',
    socialSupportBracket: null,
  });

  const genderList = ['남', '여'];
  const yearList = Array.from({ length: 100 }, (_, i) => `${2024 - i}`);
  const cityList = [
    '서울특별시',
    '부산광역시',
    '대구광역시',
    '인천광역시',
    '광주광역시',
    '대전광역시',
    '울산광역시',
    '세종특별자치시',
    '경기도',
    '강원도',
    '충청북도',
    '충청남도',
    '전라북도',
    '전라남도',
    '경상북도',
    '경상남도',
    '제주특별자치도',
  ];
  const areaList = [
    '송파구',
    '강남구',
    '강동구',
    '강북구',
    '강서구',
    '관악구',
    '광진구',
    '구로구',
    '금천구',
    '노원구',
    '도봉구',
    '동대문구',
    '동작구',
    '마포구',
    '서대문구',
    '서초구',
    '성동구',
    '성북구',
    '양천구',
    '영등포구',
    '용산구',
    '은평구',
    '종로구',
    '중구',
    '중랑구',
  ];
  const universityTypeList = ['대학(4년제)', '전문대학'];
  const universityCityList = cityList;
  const departmentGroupList = [
    '인문사회계열',
    '상경계열',
    '교육계열',
    '공학계열',
    '자연계열',
    '의학계열',
    '예체능계열',
  ];
  const enrollmentStatusList = ['재학', '휴학'];
  const maxGpaList = ['4.5', '4.3'];
  const incomeBracketList = Array.from({ length: 11 }, (_, i) => `${i}`);
  const supportIncomeBracketList = Array.from(
    { length: 9 },
    (_, i) => `${i + 1}`,
  );
  const socialSupportBracketList = [
    '해당없음',
    '장애인',
    '국가유공자',
    '다문화가정',
    '기초생활수급자',
    '차상위계층',
    '한부모가정',
  ];

  const handleSelectedIndexChange =
    (key: string) => (selectedIndex: number | null) => {
      setValue({ ...value, [key]: selectedIndex });
    };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <div className="pb-24">
      <DialogHeader title="개인정보 관리" closeHref="/me" />
      <main>
        <div className="p-6 pb-8">
          <div className="flex flex-col gap-10">
            <FormControl label="성별" required>
              <BinarySelect
                selectedIndex={value.gender}
                setSelectedIndex={handleSelectedIndexChange('gender')}
                optionList={genderList}
              />
            </FormControl>
            <FormControl label="출생년도" required>
              <div className="grid grid-cols-2 gap-4">
                <Dropdown
                  selectedIndex={value.year}
                  setSelectedIndex={handleSelectedIndexChange('year')}
                  itemList={yearList}
                  placeholder="연도"
                />
              </div>
            </FormControl>
            <FormControl label="거주지역" required>
              <div className="grid grid-cols-2 gap-4">
                <Dropdown
                  selectedIndex={value.city}
                  setSelectedIndex={handleSelectedIndexChange('city')}
                  itemList={cityList}
                  placeholder="시/도"
                />
                <Dropdown
                  selectedIndex={value.area}
                  setSelectedIndex={handleSelectedIndexChange('area')}
                  itemList={areaList}
                  placeholder="구"
                />
              </div>
            </FormControl>
            <FormControl label="거주형태" required>
              <UnitInput
                inputProps={{
                  type: 'number',
                  name: 'familySize',
                  value: value.familySize,
                  onChange: handleInputChange,
                }}
                unit="인 가구"
              />
            </FormControl>
          </div>
        </div>
        <div className="h-[0.5rem] bg-gray-05" />
        <div className="p-6 pt-8">
          <div className="flex flex-col gap-10">
            <FormControl label="학교">
              <div className="flex flex-col gap-4">
                <BinarySelect
                  selectedIndex={value.universityType}
                  setSelectedIndex={handleSelectedIndexChange('universityType')}
                  optionList={universityTypeList}
                />
                <Dropdown
                  selectedIndex={value.universityCity}
                  setSelectedIndex={handleSelectedIndexChange('universityCity')}
                  itemList={universityCityList}
                  placeholder="시/도"
                />
                <Input
                  name="universityName"
                  placeholder="대학교 이름"
                  value={value.universityName}
                  onChange={handleInputChange}
                />
              </div>
            </FormControl>
            <FormControl label="학과 계열">
              <MultipleSelect
                selectedIndex={value.departmentGroup}
                setSelectedIndex={handleSelectedIndexChange('departmentGroup')}
                optionList={departmentGroupList}
              />
            </FormControl>
            <FormControl label="학과">
              <UnitInput
                inputProps={{
                  type: 'text',
                  name: 'department',
                  value: value.department,
                  onChange: handleInputChange,
                }}
                unit="학과/학부"
              />
            </FormControl>
            <FormControl label="재적상태">
              <BinarySelect
                selectedIndex={value.enrollmentStatus}
                setSelectedIndex={handleSelectedIndexChange('enrollmentStatus')}
                optionList={enrollmentStatusList}
              />
            </FormControl>
            <FormControl label="수료학기">
              <UnitInput
                inputProps={{
                  type: 'number',
                  name: 'sememster',
                  value: value.sememster,
                  onChange: handleInputChange,
                }}
                unit="학기"
              />
            </FormControl>
            <FormControl label="총 학점">
              <div className="grid grid-cols-7 gap-4">
                <Input
                  type="number"
                  name="totalGpa"
                  placeholder="총 학점"
                  value={value.totalGpa}
                  onChange={handleInputChange}
                  className="col-span-4"
                />
                <Dropdown
                  selectedIndex={value.maxGpa}
                  setSelectedIndex={handleSelectedIndexChange('maxGpa')}
                  itemList={maxGpaList}
                  placeholder="최대 학점"
                  className="col-span-3"
                />
              </div>
            </FormControl>
            <FormControl label="직전 학기 학점">
              <div className="grid grid-cols-7 gap-4">
                <Input
                  type="number"
                  name="previousGpa"
                  placeholder="직전 학기 학점"
                  value={value.previousGpa}
                  onChange={handleInputChange}
                  className="col-span-4"
                />
                <Dropdown
                  selectedIndex={value.maxGpa}
                  setSelectedIndex={handleSelectedIndexChange('maxGpa')}
                  itemList={maxGpaList}
                  placeholder="최대 학점"
                  className="col-span-3"
                />
              </div>
            </FormControl>
          </div>
        </div>
        <div className="h-[0.5rem] bg-gray-05" />
        <div className="p-6 pt-8">
          <div className="flex flex-col gap-10">
            <FormControl label="소득분위">
              <Dropdown
                selectedIndex={value.incomeBracket}
                setSelectedIndex={handleSelectedIndexChange('incomeBracket')}
                itemList={incomeBracketList}
                placeholder="소득분위"
              />
            </FormControl>
            <FormControl label="학자금 지원구간">
              <Dropdown
                selectedIndex={value.supportIncomeBracket}
                setSelectedIndex={handleSelectedIndexChange(
                  'supportIncomeBracket',
                )}
                itemList={supportIncomeBracketList}
                placeholder="학자금 지원구간"
              />
            </FormControl>
            <FormControl label="월 고정소득">
              <UnitInput
                inputProps={{
                  type: 'number',
                  name: 'monthlyIncome',
                  value: value.monthlyIncome,
                  onChange: handleInputChange,
                }}
                unit="만원"
              />
            </FormControl>
            <FormControl label="사회배려계층 여부">
              <MultipleSelect
                selectedIndex={value.socialSupportBracket}
                setSelectedIndex={handleSelectedIndexChange(
                  'socialSupportBracket',
                )}
                optionList={socialSupportBracketList}
              />
            </FormControl>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPage;
