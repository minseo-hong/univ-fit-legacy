import ScholarshipListContent, {
  ScholarshipListContentProps,
} from '@/components/ui/ScholarshipListContent';
import ListSearchIcon from '@/components/ui/icon/ListSearchIcon';

const RecommendPage = () => {
  const title = '맞춤 장학금';

  const icon = <ListSearchIcon />;

  const filterList = ['전체', '바로 지원 가능'];

  const scholarshipList: ScholarshipListContentProps['scholarshipList'] = [
    {
      id: 1,
      title: '장학금명',
      foundation: '재단명',
      imageSrc: '/images/placeholders/placeholder-image.png',
      period: '2024.04.01 ~ 2026.04.01',
      dDay: 12,
      status: 'OPEN',
      isFavorite: true,
    },
    {
      id: 2,
      title: '장학금명',
      foundation: '재단명',
      imageSrc: '/images/placeholders/placeholder-image.png',
      period: '2024.04.01 ~ 2026.04.01',
      dDay: 12,
      status: 'OPEN',
      isFavorite: false,
    },
    {
      id: 3,
      title: '장학금명',
      foundation: '재단명',
      imageSrc: '/images/placeholders/placeholder-image.png',
      period: '2024.04.01 ~ 2026.04.01',
      dDay: 12,
      status: 'NONE',
      isFavorite: true,
    },
    {
      id: 4,
      title: '장학금명',
      foundation: '재단명',
      imageSrc: '/images/placeholders/placeholder-image.png',
      period: '2024.04.01 ~ 2026.04.01',
      dDay: 12,
      status: 'NONE',
      isFavorite: false,
    },
  ];

  return (
    <ScholarshipListContent
      title={title}
      icon={icon}
      filterList={filterList}
      scholarshipList={scholarshipList}
    />
  );
};

export default RecommendPage;
