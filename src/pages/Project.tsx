import ProjectCard from '../components/ProjectCard';

const Project = () => {
  return (
    <div className="flex gap-20 place-content-center">
      <ProjectCard
        date="24.03.26 - 04.30"
        title="뭔말easy?"
        info="퀴즈와 게임을 통해 즐겁게 한국어를 학습하는 사이트"
        skill="Next.js, TypeScript, TanStack Query, Jotai, Tailwind CSS, Next UI, Supabase, NAVER 검색 API"
      />
      <ProjectCard
        date="24.02.23 - 02.29"
        title="가배도"
        info="서울의 카페를 주제별로 모아보고 공유하는 사이트"
        skill="React, React-Query, Axios, Styled-components, Toastify, Firebase, Kakao Map API, Youtube API"
      />
      <ProjectCard
        date="24.01.04 - 02.04"
        title="Watchapedia"
        info="TMDB(영화 정보 제공 사이트) API 활용 영화 검색 사이트"
        skill="HTML, CSS, Vanilla JS, TMDB API"
      />
    </div>
  );
};

export default Project;
