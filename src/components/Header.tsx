import { Link, useLocation } from 'react-router-dom';
import { handleMailto } from '../utils/handleMailto';

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  const menus = [
    { id: 'sohyeon kim', link: '/' },
    { id: 'project', link: '/project' },
    { id: 'contact', link: '#', onClick: handleMailto },
  ];

  return (
    <ul className="flex gap-6">
      {menus.map((menu, idx) => (
        <li
          key={idx}
          className={`${path === menu.link && 'underline'} hover:underline underline-offset-1`}
        >
          <Link to={menu.link} {...(menu.onClick && { onClick: menu.onClick })}>
            {menu.id}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Header;
