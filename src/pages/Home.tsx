import { handleMailto } from '../utils/handleMailto';
import InfoLink from '../components/InfoLink';
import { Link } from 'react-router-dom';

const Home = () => {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScirpt',
    'React',
    'Redux',
    'React Query',
    'Next.js',
    'Zustand',
    'Jotai',
    'Styled-Commponents',
    'Tailwind CSS',
    'Jira',
  ];

  return (
    <div className="flex pt-[3vh] flex-col justify-start h-[calc(100vh-32px)] gap-[10vh]">
      <p className="pl-[30%] leading-normal">
        산업디자인 전공자로서 소비자 니즈를 분석해 제품을 기획하고 디자인하는
        경험을 쌓아왔습니다. 이러한 경험을 바탕으로 디지털 환경에서도 사용자
        중심의 서비스를 제공하고자 프론트엔드 개발에 도전하게 되었습니다.
        사용자의 니즈를 고려한 UI/UX에 깊은 관심을 가지고 있으며, 꾸준한 배움을
        통해 지속적으로 성장하려고 노력하고 있습니다. 지금까지 쌓아온 기술
        역량과 디자인 전공 경험을 통해 기른 소비자 중심 사고, 그리고 창의적인
        문제 해결 능력을 결합하여 사용자에게 최상의 경험을 제공하는 프론트엔드
        개발자가 되고자 합니다.
      </p>
      <section className="flex justify-between mb-10">
        <aside className="flex flex-col gap-4">
          <Link
            to="#"
            onClick={handleMailto}
            className="underline underline-offset-2"
          >
            aotoyae@gmail.com
          </Link>
          <InfoLink url="https://aotoyae.tistory.com/">blog</InfoLink>
          <InfoLink url="https://github.com/aotoyae">github</InfoLink>
        </aside>
        <main className="flex w-[70%] gap-10">
          <section className="w-[70%] flex flex-col gap-[5vh]">
            <article>
              <section className="flex gap-4">
                <div className="mt-9">
                  <h5 className="pb-2">2022</h5>
                  <h5>2017</h5>
                </div>
                <section className="flex flex-col gap-2">
                  <h4 className="pb-3">학력</h4>
                  <h5>협성대학교 산업디자인학과</h5>
                  <p className="leading-normal">
                    환경 및 사회적 이슈를 고려한 제품 기획 및 기능 설계
                    <br />
                    사용자의 니즈와 행동을 파악하기 위한 데이터 조사와 분석 수행
                    <br />
                    3D 모델링과 렌더링 기술을 이용한 제품 디자인 시각화
                  </p>
                </section>
              </section>
            </article>
            <article>
              <section className="flex gap-4 pb-2">
                <h5 className="mt-9">2020</h5>
                <section className="flex flex-col gap-2">
                  <h4 className="pb-3">경력</h4>
                  <h5>페이퍼먼츠 - 여성 의류 쇼핑몰(6개월)</h5>
                  <p className="leading-normal">
                    시즌별 홈페이지 배너 및 상품 상세페이지 디자인 담당
                  </p>
                </section>
              </section>
              <section className="flex gap-4">
                <h5>2019</h5>
                <section className="flex flex-col gap-2">
                  <h5>제이에스벤처스 - 미디어 커머스 기업(6개월)</h5>
                  <p className="leading-normal">
                    제품 광고를 위한 바이럴 영상의 기획 및 연출 담당
                  </p>
                </section>
              </section>
            </article>
            <article>
              <section className="flex gap-4 pb-2">
                <h5 className="mt-9">2023</h5>
                <section className="flex flex-col gap-2">
                  <h4 className="pb-3">기타 활동</h4>
                  <h5>팀스파르타 내일배움캠프 프론트엔드(React) 4기</h5>
                  <p className="leading-normal">
                    JS, TS, React, Next.js 활용한 웹 개발 교육 이수
                  </p>
                </section>
              </section>
              <section className="flex gap-4">
                <h5>2022</h5>
                <section className="flex flex-col gap-2">
                  <h5>UI/UX 반응형 웹디자인/웹퍼블리셔 교육</h5>
                  <p className="leading-normal">
                    HTML, CSS 활용한 웹 디자인/퍼블리싱 교육 이수
                  </p>
                </section>
              </section>
            </article>
          </section>
          <section className="flex flex-col gap-5">
            <h4>스킬</h4>
            {skills.map((skill, idx) => (
              <p key={idx}>{skill}</p>
            ))}
          </section>
        </main>
      </section>
    </div>
  );
};

export default Home;
