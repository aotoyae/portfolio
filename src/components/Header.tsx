import { Link, useParams } from 'react-router-dom';
import { handleMailto } from '../utils/handleMailto';

const Header = () => {
  const { id } = useParams();
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
          className={`${id === menu.id && 'underline'} hover:underline underline-offset-1`}
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
