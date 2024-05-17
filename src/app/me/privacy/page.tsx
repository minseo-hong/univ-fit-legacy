'use client';

import { Fragment, useState } from 'react';

import DialogHeader from '@/components/DialogHeader';
import SecondPrivacySection from '@/components/ui/privacy/SecondPrivacySection';
import ThirdPrivacySection from '@/components/ui/privacy/ThirdPrivacySection';
import { PrivacyInputValue, PrivacySectionProps } from '@/interfaces/privacy';
import FirstPrivacySection from '@/components/ui/privacy/FirstPrivacySection';
import { initPrivacyValue } from '@/constants/privacy';

const PrivacyPage = () => {
  const [value, setValue] = useState<PrivacyInputValue>(initPrivacyValue);

  const handleInputChange: PrivacySectionProps['handleInputChange'] = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSelectedIndexChange: PrivacySectionProps['handleSelectedIndexChange'] =
    (key: string) => (selectedIndex: number | null) => {
      setValue({ ...value, [key]: selectedIndex });
    };

  const sectionProps = {
    value: value,
    handleInputChange: handleInputChange,
    handleSelectedIndexChange: handleSelectedIndexChange,
  };

  const sectionList: React.ReactNode[] = [
    <FirstPrivacySection key={0} {...sectionProps} />,
    <SecondPrivacySection key={1} {...sectionProps} />,
    <ThirdPrivacySection key={2} {...sectionProps} />,
  ];

  return (
    <div className="pb-24">
      <DialogHeader title="개인정보 관리" closeHref="/me" />
      <main>
        {sectionList.map((section, index) => (
          <Fragment key={index}>
            <div className="p-6 pt-8">{section}</div>
            {index !== sectionList.length - 1 && (
              <div className="h-[0.5rem] bg-gray-05" />
            )}
          </Fragment>
        ))}
      </main>
    </div>
  );
};

export default PrivacyPage;
