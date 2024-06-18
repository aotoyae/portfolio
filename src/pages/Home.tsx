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
    'Tanstack Query',
    'Styled-Commponents',
    'Tailwind CSS',
    'Next.js',
    'Jotai',
    'Jira',
  ];

  return (
    <div className="flex flex-col gap-20">
      <p className="pl-[30%] mt-4">
        자기소개.. 국가는 과학기술의 혁신과 정보 및 인력의 개발을 통하여
        국민경제의 발전에 노력하여야 한다. 누구든지 체포 또는 구속을 당한 때에는
        즉시 변호인의 조력을 받을 권리를 가진다. 다만, 형사피고인이 스스로
        변호인을 구할 수 없을 때에는 법률이 정하는 바에 의하여 국가가 변호인을
        붙인다. 각급 선거관리위원회의 조직·직무범위 기타 필요한 사항은 법률로
        정한다.
      </p>
      <div className="flex">
        <aside className="w-[30%] flex flex-col gap-4">
          <Link
            to="#"
            onClick={handleMailto}
            className="underline underline-offset-4"
          >
            aotoyae@gmail.com
          </Link>
          <InfoLink url="https://aotoyae.tistory.com/">blog</InfoLink>
          <InfoLink url="https://github.com/aotoyae">github</InfoLink>
        </aside>
        <main className="flex w-[70%] gap-4">
          <section className="w-[70%]">
            <article>
              <h4>학력</h4>
              <div>
                <h5>
                  2022
                  <br />
                  2017
                </h5>
                <h5>협성대학교 산업디자인학과</h5>
                <p>
                  졸업전시위원회 도록팀 : 도록 레이아웃 디자인 및 인쇄 과정 담당
                  <br />
                  예술대학 학생회 문화부장 : 예술대 이벤트 기획 및 자료 제작
                  <br />
                  교내 SNS 홍보단 협성대스타 : 교내 정보 콘텐츠 제작 및 포스팅,
                  교내 이벤트 기획 및 홍보물 제작
                </p>
              </div>
            </article>
            <h4>경력</h4>
            <h4>기타 활동</h4>
          </section>
          <section className="flex flex-col gap-5">
            <h4>스킬</h4>
            {skills.map((skill) => (
              <p>{skill}</p>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
