import { Link } from 'react-router-dom';
import { CardProps } from '../utils/types';

const ProjectCard: React.FC<CardProps> = ({ date, id, title, info, skill }) => {
  return (
    <article className="w-[25%]">
      <h6>{date}</h6>
      <Link to={`/project/${id}`}>
        <h1 className="text-2xl underline underline-offset-2">{title}</h1>
      </Link>
      <h5>{info}</h5>
      <p>{skill}</p>
    </article>
  );
};

export default ProjectCard;
