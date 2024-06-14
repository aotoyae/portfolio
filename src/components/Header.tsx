import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">sohyeon kim</Link>
        </li>
        <li>
          <Link to="/project">project</Link>
        </li>
        <li>contact</li>
      </ul>
    </nav>
  );
};

export default Header;
