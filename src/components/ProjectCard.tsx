import { Link } from 'react-router-dom';
import { CardProps, DataType } from '../utils/types';
import { projectData } from '../utils/projectData';

const ProjectCard: React.FC<CardProps> = ({ date, id, title, info, skill }) => {
  const data: DataType | undefined = projectData.find(
    (data) => data.project_id === id
  );

  if (!data) return <div>Data not found</div>;

  const { thumbnail } = data;

  return (
    <article className="w-[25%] relative group">
      <h6>{date}</h6>
      <Link to={`/project/${id}`}>
        <h1 className="text-2xl underline cursor-pointer underline-offset-2">
          {title}
        </h1>
      </Link>
      <h5>{info}</h5>
      <p>{skill}</p>
      <img
        src={thumbnail}
        alt="프로젝트 썸네일"
        className="fixed z-[-1] hidden transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 group-hover:block"
      />
    </article>
  );
};

export default ProjectCard;
