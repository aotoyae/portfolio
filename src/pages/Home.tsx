import { Link } from 'react-router-dom';
import { handleMailto } from '../utils/handleMailto';

const Home = () => {
  return (
    <>
      <p>
        자기소개.. 국가는 과학기술의 혁신과 정보 및 인력의 개발을 통하여
        국민경제의 발전에 노력하여야 한다. 누구든지 체포 또는 구속을 당한 때에는
        즉시 변호인의 조력을 받을 권리를 가진다. 다만, 형사피고인이 스스로
        변호인을 구할 수 없을 때에는 법률이 정하는 바에 의하여 국가가 변호인을
        붙인다. 각급 선거관리위원회의 조직·직무범위 기타 필요한 사항은 법률로
        정한다.
      </p>
      <main>
        <article>
          <Link to="#" onClick={handleMailto} target="_blank">
            aotoyae@gmail.com
          </Link>
          <Link to="https://aotoyae.tistory.com/" target="_blank">
            blog
          </Link>
          <Link to="https://github.com/aotoyae" target="_blank">
            github
          </Link>
        </article>
      </main>
    </>
  );
};

export default Home;
