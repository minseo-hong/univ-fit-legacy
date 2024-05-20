'use client';

import Button from '@/components/ui/Button';
import Description from '../description/Description';
import ChecklistIcon from '@/components/ui/icon/ChecklistIcon';
import { useState } from 'react';
import XIcon from '@/components/ui/icon/XIcon';

const FoundationTab = () => {
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState<boolean>(false);

  const foundationDescription = `[소개]\n미래에셋은 젊은이의 희망이 되겠습니다.\n오늘의 어려움 때문에 내일의 꿈을 미루는 일이 없었으면 합니다. 내일의 두려움 때문에 미래의 가능성을 외면하지 않았으면 합니다.\n미래에셋은 아이들의 잠재력과 청춘들의 열정이 온전하게 성장해 세계와 미래로 건강하게 이어지길 희망합니다. ‘오늘보다 내일, 내일보다 미래가 더 기대되는 세상’ 아이들과 청춘의 꿈을 응원하는 미래에셋이 함께 만들겠습니다.\n\n[활동성과]\n미래에셋은 젊은이의 희망이 되겠습니다 라는 슬로건 아래 아이들에게 경험의 가치를 전하고, 청년들에게는 더 넓은 세계를 열어주고 있습니다.\n\n해외교환장학\n끊임없는 도전과 혁신으로 글로벌 경쟁력을 키우고 있는 미래에셋은 세계를 무대로 자본시장의 새로운 길을 개척 하고 있습니다. 우리의 젊은이들 또한 도전을 통한 변화를 이끌어야 한다고 생각합니다. 그래서 우리는 미래에셋 해외교환 장학 프로그램으로 젊은이들의 도전을 응원하고 있습니다.\n\n미래세대지원\n미래에셋은 다양한 경험이 생각을 키우고, 그 생각이더 나은 미래를 만든다고 믿습니다. 그래서 우리는 아이들이 교육의 기회에서 소외되지않고, 새로운 경험을 통해 꿈을 키울 수 있도록 지원하고 있습니다. 아이들이 저마다의 꿈과 희망을 위해 노력할 수 있도록 더 많은 배움의 기회를 열어가겠습니다.\n\n기부문화\n단순한 금전적 지원이나 일회성 봉사활동에서 끝나는형식적 사회공헌 활동이 아닌 정기적 지원과 진정성 있는 봉사활동으로 사회의 필요에 적극적으로 참여하며 나눔의 참된 의미를 실천합니다.함께 웃을수 있는 아름다운 내일을 만드는 나눔의 손길이 더 넓게 퍼져 나갈 수 있도록 미래에셋이 나눔의 파이를 키워가고 있습니다.`;

  const handleGetFoundationSummary = async () => {
    const res = await fetch(`/api/foundations/summary`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        document: {
          content: foundationDescription,
        },
        option: {
          language: 'ko',
        },
      }),
    });
    console.log(res.json());
    setIsSummaryModalOpen(true);
  };

  const handleCloseSummaryModal = () => {
    setIsSummaryModalOpen(false);
  };

  return (
    <div>
      <div className="p-4">
        <Button
          variant="light-primary"
          onClick={() => handleGetFoundationSummary()}
        >
          <span className="flex items-center gap-1">
            <span className="text-[1.25rem]">
              <ChecklistIcon />
            </span>
            <span className="text-lg-300">재단 정보 요약하기</span>
          </span>
        </Button>
      </div>
      <Description>{foundationDescription}</Description>
      {isSummaryModalOpen && (
        <div
          className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseSummaryModal}
        >
          <div
            className="flex w-[20rem] flex-col gap-8 rounded-2xl bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="title-sm-200 flex items-center justify-between text-gray-60">
              <div>
                <span>재단 정보 요약</span>
              </div>
              <button onClick={handleCloseSummaryModal}>
                <span className="text-[1.5rem] text-gray-40">
                  <XIcon />
                </span>
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="title-sm-300 text-gray-80">미래에셋박현주재단</h1>
              <p className="text-sm-extra text-gray-70">
                미래에셋은 젊은이의 희망이 되기 위해 아이들과 청년들의 미래를
                응원하고 있습니다. 해외교환장학과 미래세대지원을 통해 젊은이들의
                도전과 성장을 지원하며, 기부문화를 통해 사회에 적극적으로
                참여하고 있습니다. 함께 미래를 밝게 만들기 위한 노력을 이어가고
                있습니다.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoundationTab;
