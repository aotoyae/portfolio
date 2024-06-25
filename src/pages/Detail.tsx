import { useParams } from 'react-router-dom';
import { projectData } from '../utils/projectData';

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const data = projectData.find((data) => data.id === id);
  // const { title } = data;

  return <div>{title}</div>;
};

export default Detail;
