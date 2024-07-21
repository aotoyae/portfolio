import { Link } from 'react-router-dom';
import { handleMailto } from '../utils/handleMailto';
import useMenuStore from '../store/store';

const Header = () => {
  const { selectedMenu, setSelectedMenu } = useMenuStore();

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
  };

  return (
    <ul className="flex gap-6">
      <li
        onClick={() => handleMenuClick('sohyeon kim')}
        className={`${selectedMenu === 'sohyeon kim' && 'underline'} hover:underline underline-offset-1`}
      >
        <Link to="/">sohyeon kim</Link>
      </li>
      <li
        onClick={() => handleMenuClick('project')}
        className="hover:underline underline-offset-1"
      >
        <Link to="/project">project</Link>
      </li>
      <li
        onClick={() => handleMenuClick('contact')}
        className="hover:underline underline-offset-1"
      >
        <Link to="#" onClick={handleMailto}>
          contact
        </Link>
      </li>
    </ul>
  );
};

export default Header;
