import { Link } from 'react-router-dom';

interface LinkProps {
  children: string;
  url: string;
}

const InfoLink: React.FC<LinkProps> = ({ children, url }) => {
  return (
    <Link to={url} target="_blank">
      {children}
    </Link>
  );
};

export default InfoLink;
