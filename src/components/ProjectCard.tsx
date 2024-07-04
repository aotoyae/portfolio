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
    <article className="w-[25%]">
      <div className="relative group">
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
          className="absolute top-0 left-0 hidden group-hover:block"
        />
      </div>
    </article>
  );
};

export default ProjectCard;
