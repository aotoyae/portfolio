import { Link } from 'react-router-dom';
import { handleMailto } from '../utils/handleMailto';

const Header = () => {
  return (
    <ul className="flex gap-6">
      <li>
        <Link to="/">sohyeon kim</Link>
      </li>
      <li>
        <Link to="/project">project</Link>
      </li>
      <li>
        <Link to="#" onClick={handleMailto}>
          contact
        </Link>
      </li>
    </ul>
  );
};

export default Header;
