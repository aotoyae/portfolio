import { Link } from 'react-router-dom';
import { handleMailto } from '../utils/handleMailto';

const Header = () => {
  return (
    <ul className="flex gap-6">
      <li className="hover:underline underline-offset-1">
        <Link to="/">sohyeon kim</Link>
      </li>
      <li className="hover:underline underline-offset-1">
        <Link to="/project">project</Link>
      </li>
      <li className="hover:underline underline-offset-1">
        <Link to="#" onClick={handleMailto}>
          contact
        </Link>
      </li>
    </ul>
  );
};

export default Header;
