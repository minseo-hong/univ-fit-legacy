import HeartIcon from '../ui/icons/HeartIcon';

interface ScholarItemProps {
  as?: keyof JSX.IntrinsicElements;
}

const ScholarItem = ({ as: Wrapper = 'div' }: ScholarItemProps) => {
  return (
    <Wrapper className="bg-gray-00 border-gray-10 rounded-2xl border p-4">
      <div className="flex items-center">
        <div className="aspect-square w-[4rem] overflow-hidden rounded-lg">
          <img
            src="/images/placeholders/placeholder-image.png"
            alt="장학금 이미지"
          />
        </div>
        <div className="ml-3 flex flex-1 flex-col gap-1">
          <h2 className="text-md-300 text-gray-70">장학금명</h2>
          <p className="text-md-200 text-gray-40">재단명</p>
          <p className="text-gray-30 caption-200">2024.04.01 ~ 2026.04.01</p>
        </div>
        <div className="ml-2">
          <span className="text-gray-20 text-[1.5rem]">
            <HeartIcon />
          </span>
        </div>
      </div>
      <div className="text-md-200 text-primary mt-2">
        ♥ 9,890명이 찜했어요!
      </div>
    </Wrapper>
  );
};

export default ScholarItem;
