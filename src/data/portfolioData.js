export const sectionItems = [
  { id: 'hero', label: 'Hero' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Selected Work' },
  { id: 'contact', label: 'Contact' },
];

export const heroContent = {
  title: ['ONE SHOT에서', 'ONE FRAME을,', '섬세하게 다듬다.'],
  description: '흐림 속에서, 선명한 장면을 찾습니다.',
  portraitAlt: '송원일 프로필 사진',
  actions: [
    { label: '이력서', href: 'https://drive.google.com/file/d/1QDuWmjuGALz-PC1crCm_uRO7FHnTVxU_/view' },
    { label: '깃허브', variant: 'outlined', href: 'https://github.com/icerence' },
  ],
};

export const profileGroups = [
  {
    title: '인적사항',
    items: [
      { term: '이름 : 송원일' },
      { term: '나이 : 1986.08.16' },
      { term: '거주지 : 서울시 은평구' },
      { term: '휴대폰 : 010.6332.1694' },
      { term: '이메일 : icerence@gmail.com' },
    ],
  },
  {
    title: '학력 및 자격',
    items: [
      { term: '26.04 ~ 26.10', description: 'MBC 아카데미\n챗GPT 생성형 AI를 활용한 반응형 웹콘텐츠\n(영상제작&코딩) 개발기획자 양성과정' },
      { term: '05.03 ~ 13.02', description: '경북대학교 상주캠퍼스 전자공학과 졸업' },
      { term: '취득', description: '1종 보통 운전면허증' },
    ],
  },
  {
    title: '경력',
    items: [
      { term: '24.07 ~ 25.06', description: '반다이남코코리아 영업부 할인점팀 근무' },
      { term: '18.11 ~ 24.06', description: '유원커리어센터 (반다이남코코리아)\n영업팀 도급사원 근무' },
      { term: '17.07 ~ 18.01', description: '자이온전자 영업팀 대리 근무' },
      { term: '14.04 ~ 17.06', description: '그린칩스 영업팀 사원 근무' },
    ],
  },
  {
    title: '인턴 및 대외활동',
    items: [
      { term: '22.05 ~ 26.08', description: '개인 프라모델 공방(작업실) 운영중' },
      { term: '11.03 ~ 12.12', description: '대학내 동아리 탈출구 운영 (POP 예쁜글씨쓰기 및 공모전)' },
    ],
  },
];

export const projectMetadata = [
  { label: '기술 스택', value: 'HTML, CSS, JavaScript' },
  { label: '배포 매체', value: 'Desktop, Tablet, Mobile' },
  { label: '작업 기간', value: '4주' },
  { label: '본인 기여도', value: '팀장 (20%)' },
  { label: '브라우저 호환성', value: 'Chrome, Edge' },
  { label: '페이지 수', value: '메인페이지 1, 서브페이지 8' },
];

export const videoProjectMetadata = [
  { label: '기술스택', value: 'GoogleFlow, FlowMusic, Premiere, After Effects' },
  { label: '작업기간', value: '2주' },
  { label: '본인기여도', value: '100%' },
  { label: '영상 길이', value: '1분02초' },
  { label: '트러블슈팅', value: '리드미컬한 랩에 한국어 립싱크를 맞추기위해 한국어를 영어로 발음하는것을 금지하고, 노래의 프레임 단위로 설정해 립싱크를 맞췄습니다.' },
];

export const visibleSectionItems = sectionItems.filter((item) => {
  if (item.id === 'work') return projectMetadata.length > 0;
  return true;
});
