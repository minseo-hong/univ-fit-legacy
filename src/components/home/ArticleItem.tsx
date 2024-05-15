interface ArticleItemProps {
  as?: keyof JSX.IntrinsicElements;
}

const ArticleItem = ({ as: Wrapper = 'div' }: ArticleItemProps) => {
  return (
    <Wrapper>
      <div className="flex w-[9.25rem] flex-col gap-2">
        <div className="aspect-square w-full overflow-hidden rounded-xl">
          <img
            src="/images/placeholders/placeholder-image.png"
            alt="아티클 이미지"
            className="h-full w-full object-cover"
          />
        </div>
        <h2 className="text-md-300 w-full">
          소득분위 산정 방법은 어떻게 이뤄질까?
        </h2>
      </div>
    </Wrapper>
  );
};

export default ArticleItem;
