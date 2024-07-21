import { Link } from 'react-router-dom';
import { handleMailto } from '../utils/handleMailto';
import useMenuStore from '../store/store';

const Header = () => {
  const menus = [
    { id: 'sohyeon kim', link: '/' },
    { id: 'project', link: '/project' },
    { id: 'contact', link: '#', onClick: handleMailto },
  ];
  const { selectedMenu, setSelectedMenu } = useMenuStore();

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
  };

  return (
    <ul className="flex gap-6">
      {menus.map((menu, idx) => (
        <li
          key={idx}
          onClick={() => handleMenuClick(menu.id)}
          className={`${selectedMenu === menu.id && 'underline'} hover:underline underline-offset-1`}
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
