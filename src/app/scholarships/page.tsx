import { fetchAllScholarship } from '@/api/scholarship';
import ScholarshipListContent, {
  ScholarshipListContentProps,
} from '@/components/ui/ScholarshipListContent';
import NoteIcon from '@/components/ui/icon/NoteIcon';

const ScholarshipListPage = async () => {
  const title = '전체 장학금';
  const icon = '/icons/menu/all-scholarships-icon.svg';
  const filterList = ['모집중', '모집예정', '모집마감'];

  const res = await fetchAllScholarship(['ING', 'UPCOMING', 'FINISHED']);
  const scholarshipList: ScholarshipListContentProps['scholarshipList'] =
    res.data.announcementResponseList;

  return (
    <ScholarshipListContent
      title={title}
      iconSrc={icon}
      filterList={filterList}
      scholarshipList={scholarshipList}
    />
  );
};

export default ScholarshipListPage;
