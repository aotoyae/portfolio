import test_image from './images/test_img.jpeg';

export const projectData = [
  {
    project_id: 'mmeasy',
    name: '뭔말easy?',
    thumbnail: test_image,
    links: [
      { text: '배포 링크', link: 'https://www.mmeasy.kr/' },
      {
        text: '시연 영상',
        link: 'https://www.youtube.com/watch?v=6nqQ4mi-JnQ',
      },
      { text: 'Github', link: 'https://github.com/mm-easy/mm-easy' },
    ],
    title: '퀴즈와 게임을 통해 즐겁게 한국어를 학습하는 사이트',
    subTitle: '지금 이 한국어, 뭔말인지 아는 그날까지! 뭔말이지? 뭔말easy!',
    info: "'뭔말easy'는 외국인 한국어 학습자들이 한국어를 쉽고 재미있게 배울 수 있도록 돕는 서비스입니다. 사용자는 직접 한국어 퀴즈를 제작하거나 다른 사람들이 만든 퀴즈를 풀며 학습할 수 있습니다. 또한, 게임처럼 즐길 수 있는 타자 연습을 통해 한국어 타자 실력을 향상시킬 수 있습니다. 커뮤니티 페이지에서는 다른 한국어 학습자들과 소통하며 학습 동기를 높일 수 있습니다.",
    date: '2024.03.26 - 04.30',
    member: '프론트엔드 개발자 5, 디자이너 1',
    skill:
      'Next.js, TypeScript, TanStack Query, Jotai, Tailwind CSS, Next UI, Supabase, NAVER 검색 API',
    feature: [
      {
        image: test_image,
        title: '유저들이 직접 만드는 퀴즈 에디터 및 퀴즈 풀기 기능',
        info: [
          '객관식/주관식 중 원하는 문제 형식을 선택해 퀴즈 제작 가능',
          '답안 제출 시 총 점수와 문제별 정답/오답 확인 가능',
        ],
      },
      {
        image: test_image,
        title: '퀴즈 및 게시글 신고 기능 및 신고글 숨김 처리',
        info: '퀴즈나 게시글을 신고하면 정보가 DB에 담기고 관리자로 로그인 시 신고글 삭제/복구 처리 가능',
      },
      {
        image: test_image,
        title: '전역 상태로 관리한 en / ko 다국어 기능',
        info: '사용자가 고른 언어 상태를 쿠키에 저장해 새로고침 해도 언어가 유지되도록 함',
      },
      {
        image: test_image,
        title: 'Tailwind CSS를 활용한 모바일/데스크탑 반응형 UI 디자인',
      },
    ],
    troubleshooting: [
      {
        title: '퀴즈 풀기의 사용자 답안 저장 방식과 채점 기능 개선',
        info: [
          "사용자가 답을 입력할 때마다 DB에서 받아온 questions 데이터에 is_correct(true/false) 값을 추가하는 방식에서→ usersAnswers 상태를 만들어 사용자의 답을 받아 저장해두고 '제출' 버튼 클릭 시 답안과 데이터를 비교해 채점하는 방식으로 변경",
          '기존엔 사용자가 입력한 값은 알 수 없고 정답/오답 여부만 확인 가능하다는 한계점이 있었지만, 개선 후 정답/오답 여부에 따른 조건부 렌더링이 가능해졌고 채점 횟수를 줄여 효율성을 높임',
        ],
      },
      {
        title: '신고 DB table 구조 개선',
        info: [
          'admin(신고글), reports(신고자) 두 테이블을 사용해 최초 신고된 글이라면 admin 테이블 등록 후 reports 테이블에 신고자를 등록, 2회 이상 신고된 글이라면 reports 테이블에 신고자만 등록하는 방식에서→ 테이블을 하나로 합쳐 신고글과 신고자들을 모두 등록 후, 데이터를 받아올 때 중복 데이터를 거르는 방식으로 변경',
          '간소화된 테이블 구조로 신고 데이터 관리가 효율적으로 개선됨',
        ],
      },
    ],
    improvement: {
      info: [
        '마우스로 다음 문제 버튼 클릭 → enter 키로 넘길 수 있도록 수정',
        '정답/오답 여부, 총 점수만 알 수 있었던 결과 페이지 →️ 문제마다 원하면 정답을 볼 수 있도록 버튼 추가',
      ],
    },
    retrospect:
      '국가는 과학기술의 혁신과 정보 및 인력의 개발을 통하여 국민경제의 발전에 노력하여야 한다. 누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다.',
  },
];
