import { Link } from 'react-router-dom';

interface LinkProps {
  children: string;
  url: string;
}

const InfoLink: React.FC<LinkProps> = ({ children, url }) => {
  return (
    <Link to={url} target="_blank" className="underline underline-offset-4">
      {children}
    </Link>
  );
};

export default InfoLink;
