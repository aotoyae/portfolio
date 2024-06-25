import { Link } from 'react-router-dom';
import { LinkProps } from '../utils/types';

const InfoLink: React.FC<LinkProps> = ({ children, url }) => {
  return (
    <div>
      <Link
        to={url}
        target="_blank"
        className="inline-block underline underline-offset-2"
      >
        {children}
      </Link>
    </div>
  );
};

export default InfoLink;
