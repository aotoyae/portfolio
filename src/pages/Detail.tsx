import { Link, useParams } from 'react-router-dom';
import { projectData } from '../utils/projectData';
import { DataType } from '../utils/types';

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const data: DataType | undefined = projectData.find(
    (data) => data.project_id === id
  );

  if (!data) return <div>Data not found</div>;

  const { name, thumbnail, links, title, subTitle, info } = data;

  return (
    <main>
      <h3>{name}</h3>
      <section className="flex justify-between gap-12">
        <article className="">
          <ul>
            {links.map((link) => (
              <li>
                <Link to={link.link} target="_blank">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <h5>{title}</h5>
          <p>{subTitle}</p>
          <p>{info}</p>
        </article>
        <img src={thumbnail} className="" />
      </section>
    </main>
  );
};

export default Detail;
