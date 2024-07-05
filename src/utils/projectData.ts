import gabaedo_thumbnail from './images/gabaedo/gabaedo_thumbnail.png';
import mmeasy_thumbnail from './images/mmeasy/mmeasy_thumbnail.png';
import watchapedia_thumbnail from './images/watchapedia/watchapedia_thumbnail.png';
import watchapedia_feature_1 from './images/watchapedia/feature_1.png';
import watchapedia_feature_2 from './images/watchapedia/feature_2.png';
import watchapedia_feature_3 from './images/watchapedia/feature_3.gif';
import watchapedia_feature_4 from './images/watchapedia/feature_4.png';
import gabaedo_feature_1 from './images/gabaedo/feature_1.gif';
import gabaedo_feature_2 from './images/gabaedo/feature_2.gif';
import gabaedo_feature_3 from './images/gabaedo/feature_3.gif';
import mmeasy_feature_1 from './images/mmeasy/feature_1.png';
import mmeasy_feature_2 from './images/mmeasy/feature_2.png';
import mmeasy_feature_3 from './images/mmeasy/feature_3.png';
import mmeasy_feature_4 from './images/mmeasy/feature_4.png';

export const projectData = [
  {
    project_id: 'mmeasy',
    name: '뭔말easy?',
    thumbnail: mmeasy_thumbnail,
    links: [
      { text: '배포 링크', link: 'https://www.mmeasy.kr/' },
      {
        text: '시연 영상',
        link: 'https://www.youtube.com/watch?v=6nqQ4mi-JnQ',
      },
      { text: 'Github', link: 'https://github.com/mm-easy/mm-easy' },
    ],
    title: '퀴즈와 게임을 통해 즐겁게 한국어를 학습하는 사이트',
    subTitle: '지금 이 한국어, 뭔 말인지 아는 그날까지. 뭔말이지? 뭔말easy!',
    info: "'뭔말easy'는 외국인 한국어 학습자들이 한국어를 쉽고 재미있게 배울 수 있도록 돕는 서비스입니다. 사용자는 직접 한국어 퀴즈를 제작하거나 다른 사람들이 만든 퀴즈를 풀며 학습할 수 있습니다. 또한, 게임처럼 즐길 수 있는 타자 연습을 통해 한국어 타자 실력을 향상시킬 수 있습니다. 커뮤니티 페이지에서는 다른 한국어 학습자들과 소통하며 학습 동기를 높일 수 있습니다.",
    date: '2024.03.26 - 04.30',
    member: '프론트엔드 개발자 5, 디자이너 1',
    skill:
      'Next.js, TypeScript, TanStack Query, Jotai, Tailwind CSS, Next UI, Supabase, NAVER 검색 API',
    feature: [
      {
        image: mmeasy_feature_1,
        title: '유저들이 직접 만드는 퀴즈 에디터 및 퀴즈 풀기 기능',
        info: [
          '객관식/주관식 중 원하는 문제 형식을 선택해 퀴즈 제작 가능',
          '답안 제출 시 총 점수와 문제별 정답/오답 확인 가능',
        ],
      },
      {
        image: mmeasy_feature_2,
        title: '퀴즈 및 게시글 신고 기능 및 신고글 숨김 처리',
        info: '퀴즈나 게시글을 신고하면 정보가 DB에 담기고 관리자로 로그인 시 신고글 삭제/복구 처리 가능',
      },
      {
        image: mmeasy_feature_3,
        title: '전역 상태로 관리한 en / ko 다국어 기능',
        info: '사용자가 고른 언어 상태를 쿠키에 저장해 새로고침 해도 언어가 유지되도록 함',
      },
      {
        image: mmeasy_feature_4,
        title: 'Tailwind CSS를 활용한 모바일/데스크탑 반응형 UI 디자인',
      },
    ],
    troubleshooting: [
      {
        title: '퀴즈 풀기의 사용자 답안 저장 방식과 채점 기능 개선',
        info: [
          "사용자가 답을 입력할 때마다 DB에서 받아온 questions 데이터에 is_correct(true/false) 값을 추가하는 방식에서 → usersAnswers 상태를 만들어 사용자의 답을 받아 저장해두고 '제출' 버튼 클릭 시 답안과 데이터를 비교해 채점하는 방식으로 변경",
          '기존엔 사용자가 입력한 값은 알 수 없고 정답/오답 여부만 확인 가능하다는 한계점이 있었지만, 개선 후 정답/오답 여부에 따른 조건부 렌더링이 가능해졌고 채점 횟수를 줄여 효율성을 높임',
        ],
      },
      {
        title: '신고 DB table 구조 개선',
        info: [
          'admin(신고글), reports(신고자) 두 테이블을 사용해 최초 신고된 글이라면 admin 테이블 등록 후 reports 테이블에 신고자를 등록, 2회 이상 신고된 글이라면 reports 테이블에 신고자만 등록하는 방식에서 → 테이블을 하나로 합쳐 신고글과 신고자들을 모두 등록 후, 데이터를 받아올 때 중복 데이터를 거르는 방식으로 변경',
          '간소화된 테이블 구조로 신고 데이터 관리가 효율적으로 개선됨',
        ],
      },
    ],
    improvement: [
      {
        title: '마우스로 다음 문제 버튼 클릭',
        info: 'enter 키로 넘길 수 있도록 수정',
      },
      {
        title: '정답/오답 여부, 총 점수만 알 수 있었던 결과 페이지',
        info: '문제마다 원하면 정답을 볼 수 있도록 버튼 추가',
      },
    ],
    retrospect:
      '기획 시 테이블 구조를 효율적으로 설계하는 것의 중요성을 느꼈습니다. 또한, 팀원들과 꾸준히 스크럼과 태스크 관리를 진행한 덕분에 기간 내에 모두가 만족할 만한 결과물을 낼 수 있었습니다.',
  },
  {
    project_id: 'gabaedo',
    name: '가배도',
    thumbnail: gabaedo_thumbnail,
    links: [
      { text: '배포 링크', link: 'https://gabaedo.vercel.app/' },
      {
        text: '시연 영상',
        link: 'https://www.youtube.com/watch?v=7CeAwvu3-YU',
      },
      {
        text: 'Github',
        link: 'https://github.com/porosadporosad/GABAEDO?tab=readme-ov-file',
      },
    ],
    title: '서울의 카페를 주제별로 모아보고 공유하는 사이트',
    subTitle: '나의 취향을 가득 담은 카페 지도를 가배도(咖啡圖)로 만들어보자.',
    info: "'가배도'는 카페를 즐겨 찾는 사람들을 위한 카테고리별 카페 지도 공유 서비스입니다. 사용자는 직접 원하는 컨셉의 지도를 만들어 카페를 추가하거나 삭제할 수 있으며, 다른 사람들이 만든 가배도를 즐겨찾기할 수 있습니다. 또한, 원하는 카페와 관련된 유튜브 영상을 통해 방문 후기를 살펴볼 수 있습니다.",
    date: '2024.02.23 - 02.29',
    member: '프론트엔드 개발자 5',
    skill:
      'React, React-Query, Axios, Styled-components, Toastify, Firebase, Kakao Map API, Youtube API',
    feature: [
      {
        image: gabaedo_feature_1,
        title: 'useQuery를 이용해 받아온 카페 맵 데이터로 메인 페이지 구성',
        info: [
          'firebase에서 받아온 하나의 데이터를 filter, sort 등 컴포넌트 별로 처리를 하여 전달',
          '공통된 데이터를 여러 방면으로 활용해 컨텐츠를 좀 더 풍부하게 하고, 사용자가 편하게 볼 수 있도록 카테고리화',
        ],
      },
      {
        image: gabaedo_feature_2,
        title: '지도를 가장 많이 만든 유저들의 랭킹 표시',
        info: '카페 맵 데이터 중 지도를 만든 user id를 모아 카운트를 세고, 5위까지 보여주도록 설정',
      },
      {
        image: gabaedo_feature_3,
        title: '메인 페이지에 Youtube API를 활용한 카페 컨텐츠 추가',
        info: '각 카페의 Youtube 아이콘 클릭 시 해당 카페의 관련 영상 목록 표시',
      },
    ],
    improvement: [
      {
        title: 'Styled-components의 props 활용',
        info: '하나의 컴포넌트에 여러 props를 내려주어 다양하고 동적인 스타일링 활용',
      },
      {
        title:
          '프로필 이미지나 닉네임 변경 시 다른 페이지에도 실시간으로 적용되도록 수정',
        info: 'Query Invalidation을 이용해 기존의 쿼리를 무효화시켜 최신 데이터 표시',
      },
    ],
    retrospect:
      '기획 단계에서 데이터들을 어떻게 연결 지어야 할지에 대해 어려움을 겪었지만, 팀원들과 잘 소통하여 개발 과정이 순조롭게 진행되었고 이를 통해 기획의 중요성을 깨달을 수 있었습니다.',
  },
  {
    project_id: 'watchapedia',
    name: '왓챠피디아',
    thumbnail: watchapedia_thumbnail,
    links: [
      {
        text: '관련 포스팅',
        link: 'https://aotoyae.tistory.com/entry/JS-%EB%82%B4%EB%B0%B0%EC%BA%A0-%EC%98%81%ED%99%94-%EA%B2%80%EC%83%89-%EC%82%AC%EC%9D%B4%ED%8A%B8-TMDB-API',
      },
      {
        text: 'Github',
        link: 'https://github.com/aotoyae/watchapedia',
      },
    ],
    title: 'TMDB(영화 정보 제공 사이트) API 활용 영화 검색 사이트',
    subTitle: '당신의 인생 영화를 왓챠피디아에서 찾아보세요.',
    info: "'왓챠피디아'는 최신 개봉 영화의 평점과 줄거리 등 다양한 정보를 제공하는 서비스입니다. 검색창을 통해 영화 제목을 검색할 수 있으며, 스크롤을 내리면 추가 영화 데이터가 자동으로 로드됩니다. 썸네일 클릭 시 영화의 상세 페이지로 이동하여 개봉일, 명대사, 상세 줄거리 등 자세한 정보를 확인할 수 있습니다.",
    date: '2024.01.04 - 02.04',
    member: '프론트엔드 개발자 1',
    skill: 'HTML, CSS, Vanilla JS, TMDB API',
    feature: [
      {
        image: watchapedia_feature_1,
        title: 'TMDB API를 활용해 비동기 통신으로 최신 영화 데이터 불러오기',
      },
      {
        image: watchapedia_feature_2,
        title: '썸네일 클릭 시 서브 페이지로 이동하며 영화의 상세 API 활용',
        info: '페이지 이동 시 params로 ID를 넘겨주어 영화의 상세 정보 요청',
      },
      {
        image: watchapedia_feature_3,
        title: '영화 목록 무한 스크롤 구현',
        info: [
          '스크롤이 일정 높이로 내려가면 다음 페이지의 데이터 호출',
          'debouncing을 설정해 연속되는 이벤트 호출을 방지',
        ],
      },
      {
        image: watchapedia_feature_4,
        title: '검색창 아래 최근 검색 키워드 기록 추가',
        info: '검색 시 자동으로 키워드 추가, 키워드 클릭 시 영화 검색',
      },
    ],
    improvement: [
      {
        title: '영화의 포스터 이미지가 제공되지 않을 경우, 대체 이미지 표시',
        info: 'img 태그의 onerror 속성을 이용하여 이미지 로딩에 실패했을 때 표시할 이미지를 지정',
      },
      {
        title: '스크롤 시 1 page 데이터만 불러오는 문제 해결',
        info: '데이터 호출 URL의 쿼리스트링에 page가 중복 작성되어 생긴 문제로, 설정해 둔 URL 변수를 수정해 해결',
      },
    ],
    retrospect:
      'API를 통해 데이터를 요청하고 화면을 내가 원하는 대로 구성하는 과정에서 큰 재미를 느꼈습니다. 또한, 여러 기능을 추가하고 개선해 나가면서 성취감을 느낄 수 있었습니다.',
  },
];
