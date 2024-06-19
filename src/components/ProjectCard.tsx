interface CardProps {
  date: string;
  title: string;
  info: string;
  skill: string;
}

const ProjectCard: React.FC<CardProps> = ({ date, title, info, skill }) => {
  return (
    <article className="w-[25%]">
      <h6>{date}</h6>
      <h1 className="text-2xl underline underline-offset-2">{title}</h1>
      <h5>{info}</h5>
      <p>{skill}</p>
    </article>
  );
};

export default ProjectCard;
