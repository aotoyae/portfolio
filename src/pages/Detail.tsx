import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams<{ id: string }>();

  return <div>{id}</div>;
};

export default Detail;
