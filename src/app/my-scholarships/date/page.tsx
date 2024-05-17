import Image from 'next/image';

const MyScholarshipsDatePage = () => {
  const scholarshipList: {
    id: number;
    name: string;
    organization: string;
    startDate: string;
    endDate: string;
    imageSrc: string;
  }[] = [
    {
      id: 1,
      name: '장학금명',
      organization: '재단명',
      startDate: '2024-04-01',
      endDate: '2024-04-23',
      imageSrc: '/images/placeholders/placeholder-image.png',
    },
    {
      id: 2,
      name: '장학금명',
      organization: '재단명',
      startDate: '2024-04-01',
      endDate: '2024-04-22',
      imageSrc: '/images/placeholders/placeholder-image.png',
    },
    {
      id: 3,
      name: '장학금명',
      organization: '재단명',
      startDate: '2024-04-01',
      endDate: '2024-04-22',
      imageSrc: '/images/placeholders/placeholder-image.png',
    },
    {
      id: 4,
      name: '장학금명',
      organization: '재단명',
      startDate: '2024-04-01',
      endDate: '2024-04-21',
      imageSrc: '/images/placeholders/placeholder-image.png',
    },
    {
      id: 5,
      name: '장학금명',
      organization: '재단명',
      startDate: '2024-04-01',
      endDate: '2024-04-20',
      imageSrc: '/images/placeholders/placeholder-image.png',
    },
  ];

  const formatSectionDateString = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  const formatListDateString = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  };

  const formatItemDateString = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
  };

  const dateList = Array.from(
    new Set(
      scholarshipList.map((scholarship) =>
        formatListDateString(scholarship.endDate),
      ),
    ),
  ).sort();

  return (
    <main className="p-4 pb-16">
      <div className="flex flex-col gap-6">
        {dateList.map((date) => (
          <div key={date}>
            <h2 className="text-lg-200 ml-2 text-gray-80">
              {formatSectionDateString(date)}
            </h2>
            <ul key={date} className="mt-2 flex flex-col gap-4">
              {scholarshipList.map(
                (scholarship) =>
                  date === formatListDateString(scholarship.endDate) && (
                    <li
                      key={scholarship.id}
                      className="flex items-center gap-4 rounded-2xl bg-gray-00 p-4 pb-3"
                    >
                      <div className="overflow-hidden rounded-lg">
                        <Image
                          src={scholarship.imageSrc}
                          alt={scholarship.name}
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-md-300 text-gray-70">
                          {scholarship.name}
                        </h3>
                        <div className="text-md-200 text-gray-40">
                          {scholarship.organization}
                        </div>
                        <div className="caption-200 text-gray-30">
                          {formatItemDateString(scholarship.startDate)} ~{' '}
                          {formatItemDateString(scholarship.endDate)}
                        </div>
                      </div>
                    </li>
                  ),
              )}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MyScholarshipsDatePage;
