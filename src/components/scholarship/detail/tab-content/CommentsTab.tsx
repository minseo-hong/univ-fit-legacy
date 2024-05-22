import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

const CommentsTab = () => {
  const [isCommentInputFocus, setIsCommentInputFocus] = useState(false);

  const commentList: {
    name: string;
    createdAt: string;
    profileSrc: string;
    content: string;
  }[] = [
    {
      name: '강렬한이름',
      createdAt: '1시간 전',
      profileSrc: '/images/placeholders/placeholder-image.png',
      content: '이 장학금 매년 열리는건지 아시는 분 있나요?',
    },
    {
      name: '활동적인콜리',
      createdAt: '1시간 전',
      profileSrc: '/images/placeholders/placeholder-image.png',
      content:
        '다음주까지 기한 연장한다면 재단 사이트에 공지 올라왔어요 !! 신청하실 분들은 사이트 들어가서 확인해보면 좋을 거 같아요.',
    },
    {
      name: 'bskelwefs',
      createdAt: '5시간 전',
      profileSrc: '/images/placeholders/placeholder-image.png',
      content:
        '이거 자소서 어케 써야돼 문항 수가 너무 많아서 오래걸리는데 다들 벌써 다 작성했나?',
    },
    {
      name: '아다르고어다르고',
      createdAt: '9시간 전',
      profileSrc: '/images/placeholders/placeholder-image.png',
      content:
        '개꿀장학금이네~개꿀장학금이네~개꿀장학금이네~개꿀장학금이네~개꿀장학금이네~개꿀장학금이네~개꿀장학금이네~개꿀장학금이네~개꿀장학금이네~개꿀장학금이네~개꿀장학금이네~개꿀장학금이네~',
    },
    {
      name: '구구코니',
      createdAt: '15시간 전',
      profileSrc: '/images/placeholders/placeholder-image.png',
      content:
        '재단 전화번호 아는 사람 있나요? 문의해야하는데 전화번호를 못 찾겠다',
    },
  ];

  const handleCommentInputFocus = () => {
    setIsCommentInputFocus(true);
  };

  const handleCommentInputBlur = () => {
    setIsCommentInputFocus(false);
  };

  return (
    <div>
      <div className="flex flex-col gap-2 p-4">
        <div>
          <input
            type="text"
            placeholder="댓글 달기..."
            className={clsx(
              'text-sm-200 w-full border-b-2 pb-2 outline-none placeholder:text-gray-30',
              {
                'border-gray-10': !isCommentInputFocus,
                'border-primary': isCommentInputFocus,
              },
            )}
            onFocus={handleCommentInputFocus}
          />
        </div>
        {isCommentInputFocus && (
          <div className="flex items-center justify-end gap-4">
            <button
              className="text-sm-200 text-gray-40"
              onClick={handleCommentInputBlur}
            >
              취소
            </button>
            <button className="text-sm-300 rounded-full bg-primary px-4 py-2 text-gray-00">
              등록
            </button>
          </div>
        )}
      </div>
      <ul>
        {commentList.map((comment, index) => (
          <li key={index} className="flex items-start gap-2 p-4">
            <div className="relative h-[2rem] w-[2rem] overflow-hidden rounded-full">
              <Image
                src="/images/placeholders/placeholder-profile.png"
                alt="프사 임시 이미지"
                fill
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col items-start gap-2">
              <div>
                <div className="flex items-center gap-1">
                  <span className="caption-300 text-gray-90">
                    {comment.name}
                  </span>
                  <span className="caption-200 text-gray-40">
                    {comment.createdAt}
                  </span>
                </div>
                <p className="text-sm-extra text-gray-70">{comment.content}</p>
              </div>
              <button className="caption-200 text-gray-40">답글 달기</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsTab;
