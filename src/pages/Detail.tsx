import { Link, useParams } from 'react-router-dom';
import { projectData } from '../utils/projectData';
import { DataType } from '../utils/types';

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const data: DataType | undefined = projectData.find(
    (data) => data.project_id === id
  );

  if (!data) return <div>Data not found</div>;

  const {
    name,
    thumbnail,
    links,
    title,
    subTitle,
    info,
    date,
    member,
    skill,
    troubleshooting,
    retrospect,
  } = data;

  return (
    <main className="h-full">
      <h3>{name}</h3>
      <section className="flex justify-between gap-12">
        <article className="w-2/5 place-content-end">
          <ul className="flex gap-3 pb-3 underline underline-offset-2">
            {links.map((link) => (
              <li key={link.link}>
                <Link to={link.link} target="_blank">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <h5 className="pb-7">{title}</h5>
          <p className="pb-16">
            {subTitle}
            <br />
            {info}
          </p>
          <p className="pb-2">{date}</p>
          <p className="pb-3">{member}</p>
          <h5>{skill}</h5>
        </article>
        <img src={thumbnail} className="w-3/5 h-[60vh] object-cover" />
      </section>
      <section></section>
      <section>
        <h3>트러블 슈팅</h3>
        {troubleshooting.map((issue) => (
          <article key={issue.title}>
            <h5>{issue.title}</h5>
            <p>{issue.info}</p>
          </article>
        ))}
      </section>
      <section>
        <h3>회고</h3>
        <p>{retrospect}</p>
      </section>
    </main>
  );
};

export default Detail;
