import { useParams } from 'react-router-dom';
import { projectData } from '../utils/projectData';
import { DataType } from '../utils/types';

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const data: DataType | undefined = projectData.find(
    (data) => data.project_id === id
  );

  if (!data) return <div>Data not found</div>;

  const { title } = data;

  return <div>{title}</div>;
};

export default Detail;
