import BookmarkIcon from '@/components/ui/icon/BookmarkIcon';
import HeartIcon from '@/components/ui/icon/HeartIcon';
import ShareIcon from '@/components/ui/icon/ShareIcon';

const ScholarshipBottomAction = () => {
  const actionList: {
    icon: React.ReactNode;
    text: string;
  }[] = [
    {
      icon: <ShareIcon />,
      text: '공유하기',
    },
    {
      icon: <HeartIcon />,
      text: '10',
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 z-10 h-[4rem] w-full border-t border-gray-10 bg-gray-00 pl-4">
      <div className="mx-auto grid h-full max-w-screen-lg grid-cols-5">
        {actionList.map((action, index) => (
          <button key={index} className="flex h-full items-end justify-center">
            <div className="flex flex-col items-center gap-1 px-4 pb-2 text-gray-60">
              <div>
                <span className="text-[1.5rem]">{action.icon}</span>
              </div>
              <div className="caption-300">{action.text}</div>
            </div>
          </button>
        ))}
        <button className="col-span-3 flex items-center justify-center gap-2.5 bg-primary text-gray-00">
          <span className="text-[1.5rem]">
            <BookmarkIcon strokeWidth={2.5} />
          </span>
          <span className="text-lg-300">저장하기</span>
        </button>
      </div>
    </div>
  );
};

export default ScholarshipBottomAction;
