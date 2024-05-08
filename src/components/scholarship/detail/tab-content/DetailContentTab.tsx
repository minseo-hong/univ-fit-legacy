import Description from '../description/Description';

const DetailContentTab = () => {
  const detailContent = `[신청일정]\n신청기간: 24. 04. 24 10시 ~ 24. 04. 30 15시\n\n[선발취지]\n대한민국의 대학생들이 넓은 세계에서 다양한 학문적, 문화적 경험을 할 수 있도록 소속 대학에서 해외 대학의 교환학생으로 선발 (또는 선발 예정)된 학부생들을 대상으로 장학금 지원을 통한 인재육성에 기여하고자 함\n\n[장학내용]\n• 미주/유럽/기타 : 750만원\n• 아시아 : 550만원\n\n[지원대상]\n4년제 국내 대학 재학생\n• 신입생, 예체능 및 의학계열 전공자 제외\n• 24-1학기 휴학생 지원 가능`;

  return <Description>{detailContent}</Description>;
};

export default DetailContentTab;
