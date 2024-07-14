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
    'Styled-Commponents',
    'Tailwind CSS',
    'Next.js',
    'Jotai',
    'Jira',
  ];

  return (
    <div className="flex pt-[3vh] flex-col justify-start h-[calc(100vh-32px)] gap-[10vh]">
      <p className="pl-[30%] leading-tight">
        프론트엔드 개발자로서 다양한 프로젝트에서 쌓은 경험을 바탕으로, 사용자
        중심의 애플리케이션을 개발하는 것을 목표로 하고 있습니다. 효율적인 상태
        관리를 통해 로컬, 전역, 서버 상태 데이터를 체계적으로 관리하고 유지하여,
        최적화된 성능을 제공하는 데 주력합니다. 정적 타입을 적용한 타입스크립트
        코드 작성으로 코드의 품질과 안전성을 높이며, 예기치 못한 오류를
        방지합니다. 디자인 전공 경험을 살려 다양한 방식의 CSS 스타일링에
        능숙하며, 사용자의 니즈와 행동 패턴을 고려한 UI/UX를 설계합니다.
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
                <h5 className="mt-9">
                  2022
                  <br />
                  2017
                </h5>
                <section className="flex flex-col gap-2">
                  <h4 className="pb-3">학력</h4>
                  <h5>협성대학교 산업디자인학과</h5>
                  <p className="leading-tight">
                    졸업전시위원회 도록팀 : 도록 레이아웃 디자인 및 인쇄 과정
                    담당
                    <br />
                    예술대학 학생회 문화부장 : 예술대 이벤트 기획 및 자료 제작
                    <br />
                    교내 SNS 홍보단 협성대스타 : 교내 정보 콘텐츠 제작 및
                    포스팅, 교내 이벤트 기획 및 홍보물 제작
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
                  <p className="leading-tight">
                    홈페이지 배너, 상품 상세페이지 및 이벤트 쿠폰 디자인 담당
                    <br />
                    시즌별 상품 홍보를 위한 배너 디자인
                    <br />
                    신상품 촬영보조 상세페이지 디자인
                    <br />
                    이벤트 카드 뉴스 및 쿠폰 디자인
                  </p>
                </section>
              </section>
              <section className="flex gap-4">
                <h5>2019</h5>
                <section className="flex flex-col gap-2">
                  <h5>제이에스벤처스 - 미디어 커머스 기업(6개월)</h5>
                  <p className="leading-tight">
                    제품 광고를 위한 바이럴 영상의 기획 및 연출 담당
                    <br />
                    SNS 광고 영상
                    <br />
                    기획 및 연출 신제품 광고 카드 뉴스 제작
                    <br />
                    제품 홍보를 위한 네이버 포스팅
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
                  <p>JS, TS, React, Next.js 활용한 웹 개발 교육 이수</p>
                </section>
              </section>
              <section className="flex gap-4">
                <h5>2022</h5>
                <section>
                  <h5>UI/UX 반응형 웹디자인/웹퍼블리셔 교육</h5>
                  <p>HTML, CSS 활용한 웹 디자인 교육 이수</p>
                </section>
              </section>
            </article>
          </section>
          <section className="flex flex-col gap-5">
            <h4>스킬</h4>
            {skills.map((skill) => (
              <p>{skill}</p>
            ))}
          </section>
        </main>
      </section>
    </div>
  );
};

export default Home;
