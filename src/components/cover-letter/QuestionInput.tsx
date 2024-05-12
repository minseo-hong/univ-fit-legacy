'use client';

import { useState } from 'react';

interface QuestionInputProps {
  maxAnswerLength: number;
}

const QuestionInput = ({ maxAnswerLength }: QuestionInputProps) => {
  const [answerValue, setAnswerValue] = useState<string>('');

  const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > maxAnswerLength) return;
    setAnswerValue(e.target.value);
  };

  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-gray-00 px-6 py-5">
      <input
        type="text"
        placeholder="질문을 입력하세요"
        className="text-lg-200 text-gray-80 outline-none placeholder:text-gray-40"
      />
      <hr />
      <textarea
        rows={3}
        placeholder="내용을 입력하세요"
        className="text-sm-extra text-gray-60 outline-none placeholder:text-gray-40"
        value={answerValue}
        onChange={handleAnswerChange}
      />
      <div className="text-sm-200 text-right">
        <span className="text-gray-40">{answerValue.length}</span>
        <span className="text-gray-20">/{maxAnswerLength}</span>
      </div>
    </div>
  );
};

export default QuestionInput;
