import Image from 'next/image';

import Capsule from '@/components/ui/Capsule';
import HeartFilledIcon from '@/components/ui/icon/HeartFilledIcon';

const MyScholarshipsFavoritePage = () => {
  const scholarshipList: {
    id: number;
    name: string;
    organization: string;
    startDate: string;
    endDate: string;
    imageSrc: string;
    status: 'PASS' | 'FAIL' | 'NONE';
  }[] = [
    {
      id: 1,
      name: '장학금명',
      organization: '재단명',
      startDate: '2024-04-01',
      endDate: '2024-04-23',
      imageSrc: '/images/placeholders/placeholder-image.png',
      status: 'PASS',
    },
    {
      id: 2,
      name: '장학금명',
      organization: '재단명',
      startDate: '2024-04-01',
      endDate: '2024-04-22',
      imageSrc: '/images/placeholders/placeholder-image.png',
      status: 'FAIL',
    },
    {
      id: 3,
      name: '장학금명',
      organization: '재단명',
      startDate: '2024-04-01',
      endDate: '2024-04-22',
      imageSrc: '/images/placeholders/placeholder-image.png',
      status: 'NONE',
    },
    {
      id: 4,
      name: '장학금명',
      organization: '재단명',
      startDate: '2024-04-01',
      endDate: '2024-04-21',
      imageSrc: '/images/placeholders/placeholder-image.png',
      status: 'PASS',
    },
    {
      id: 5,
      name: '장학금명',
      organization: '재단명',
      startDate: '2024-04-01',
      endDate: '2024-04-20',
      imageSrc: '/images/placeholders/placeholder-image.png',
      status: 'FAIL',
    },
    {
      id: 6,
      name: '장학금명',
      organization: '재단명',
      startDate: '2024-04-01',
      endDate: '2024-04-20',
      imageSrc: '/images/placeholders/placeholder-image.png',
      status: 'FAIL',
    },
  ];

  const formatDateString = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
  };

  return (
    <main className="p-4 pb-16">
      <ul className="flex flex-col gap-4">
        {scholarshipList.map((scholarship) => (
          <li
            key={scholarship.id}
            className="flex flex-col gap-3 rounded-2xl border border-gray-10 bg-gray-00 p-4 pb-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Capsule size="sm">D-12</Capsule>
                <Capsule size="sm" variant="stroke-success">
                  지원대상
                </Capsule>
              </div>
              <div>
                <span className="text-[1.5rem] text-primary">
                  <HeartFilledIcon />
                </span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={scholarship.imageSrc}
                  alt={scholarship.name}
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <h3 className="text-md-300 text-gray-70">{scholarship.name}</h3>
                <div className="text-md-200 text-gray-40">
                  {scholarship.organization}
                </div>
                <div className="caption-200 text-gray-30">
                  {formatDateString(scholarship.startDate)} ~{' '}
                  {formatDateString(scholarship.endDate)}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default MyScholarshipsFavoritePage;
