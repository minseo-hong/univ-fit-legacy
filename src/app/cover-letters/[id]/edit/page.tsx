import CoverLetterNewPage from '../../new/page';

const CoverLetterEditPage = ({ params }: { params: { id: number } }) => {
  return <CoverLetterNewPage params={params} />;
};

export default CoverLetterEditPage;
