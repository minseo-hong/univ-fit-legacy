import { fetchRecommendScholarship } from '@/api/scholarship';
import ScholarshipListContent, {
  ScholarshipListContentProps,
} from '@/components/ui/ScholarshipListContent';

const RecommendPage = async () => {
  const title = '맞춤 장학금';
  const iconSrc = '/icons/menu/recommend-scholarships-icon.svg';
  const filterList = ['전체', '바로 지원 가능'];

  const res = await fetchRecommendScholarship('전체');
  const scholarshipList: ScholarshipListContentProps['scholarshipList'] =
    res.data.announcementResponseList;

  return (
    <ScholarshipListContent
      title={title}
      iconSrc={iconSrc}
      filterList={filterList}
      scholarshipList={scholarshipList}
    />
  );
};

export default RecommendPage;
