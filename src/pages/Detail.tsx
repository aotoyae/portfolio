import { Link, useParams } from 'react-router-dom';
import { projectData } from '../utils/projectData';
import { DataType } from '../utils/types';

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const data: DataType | undefined = projectData.find(
    (data) => data.project_id === id
  );

  if (!data) return <div>Data not found</div>;

  const { name, links, title } = data;

  return (
    <main>
      <h5>{name}</h5>
      <section>
        <article>
          <ul>
            {links.map((link) => (
              <li>
                <Link to={link.link} target="_blank">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
};

export default Detail;
