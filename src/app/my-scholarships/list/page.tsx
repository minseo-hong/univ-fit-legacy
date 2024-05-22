import Status, { StatusProps } from '@/components/ui/Status';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const MyScholarshipsListPage = ({
  searchParams,
}: {
  searchParams: { status: string };
}) => {
  const badgeList: { label: string; href: string; active: boolean }[] = [
    {
      label: '전체',
      href: '/my-scholarships/list',
      active: searchParams.status === undefined,
    },
    {
      label: '합격',
      href: '/my-scholarships/list?status=pass',
      active: searchParams.status === 'pass',
    },
    {
      label: '불합격',
      href: '/my-scholarships/list?status=fail',
      active: searchParams.status === 'fail',
    },
  ];

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

  const filterScholarshipList = scholarshipList.filter((scholarship) => {
    if (searchParams.status === 'pass') {
      return scholarship.status === 'PASS';
    } else if (searchParams.status === 'fail') {
      return scholarship.status === 'FAIL';
    } else {
      return true;
    }
  });

  const formatDateString = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
  };

  return (
    <main className="p-4 pb-16">
      <div className="mx-auto max-w-screen-lg">
        <div className="flex items-center gap-2">
          {badgeList.map((badge, index) => (
            <Link
              key={index}
              href={badge.href}
              className={clsx('text-md-200 rounded-full border px-3 py-1.5', {
                'border-gray-80 bg-gray-80 text-gray-10': badge.active,
                'border-gray-15 bg-gray-00 text-gray-60': !badge.active,
              })}
            >
              {badge.label}
            </Link>
          ))}
        </div>
        <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filterScholarshipList.map((scholarship) => (
            <li key={scholarship.id}>
              <Link
                href={`/my-scholarships/${scholarship.id}`}
                className="flex items-start gap-4 rounded-2xl border border-gray-10 bg-gray-00 p-4 pb-3"
              >
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={scholarship.imageSrc}
                    alt={scholarship.name}
                    width={64}
                    height={64}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  <h3 className="text-md-300 text-gray-70">
                    {scholarship.name}
                  </h3>
                  <div className="text-md-200 text-gray-40">
                    {scholarship.organization}
                  </div>
                  <div className="caption-200 text-gray-30">
                    {formatDateString(scholarship.startDate)} ~{' '}
                    {formatDateString(scholarship.endDate)}
                  </div>
                </div>
                <div>
                  <Status
                    variant={
                      (scholarship.status === 'PASS'
                        ? 'success'
                        : scholarship.status === 'FAIL'
                          ? 'danger'
                          : scholarship.status === 'NONE' &&
                            'stroke-default') as StatusProps['variant']
                    }
                  >
                    {scholarship.status === 'PASS'
                      ? '합격'
                      : scholarship.status === 'FAIL'
                        ? '불합격'
                        : scholarship.status === 'NONE' && '미입력'}
                  </Status>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default MyScholarshipsListPage;
