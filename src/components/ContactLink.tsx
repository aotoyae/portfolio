import { Link } from 'react-router-dom';

interface ContackLinkProps {
  children: string;
  url: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const ContactLink: React.FC<ContackLinkProps> = ({
  children,
  url,
  onClick,
}) => {
  return (
    <Link to={url} onClick={onClick} target="_blank">
      {children}
    </Link>
  );
};

export default ContactLink;
