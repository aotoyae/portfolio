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
    feature,
    troubleshooting,
    improvement,
    retrospect,
  } = data;

  return (
    <main className="h-full py-[3vh]">
      <h3>{name}</h3>
      <div className="flex flex-col h-full gap-16">
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
          <img
            src={thumbnail}
            alt="페이지 썸네일"
            className="w-3/5 h-[60vh] object-cover"
          />
        </section>
        <section>
          <h3>담당 기능</h3>
          <article className="grid grid-cols-3 gap-3">
            {feature.map((issue) => (
              <div>
                <img
                  src={issue.image}
                  alt="기능 이미지"
                  className="object-cover w-full h-[30vh]"
                />
                <h5>{issue.title}</h5>
                {issue.info &&
                  (Array.isArray(issue.info) && issue.info.length >= 2 ? (
                    issue.info.map((item, idx) => <p key={idx}>{item}</p>)
                  ) : (
                    <p>{issue.info}</p>
                  ))}
              </div>
            ))}
          </article>
        </section>
        {troubleshooting && (
          <section>
            <h3>트러블 슈팅</h3>
            {troubleshooting.map((issue) => (
              <article key={issue.title} className="w-2/4">
                <h5>{issue.title}</h5>
                {issue.info.length >= 2 ? (
                  issue.info.map((item, idx) => <p key={idx}>{item}</p>)
                ) : (
                  <p>{issue.info}</p>
                )}
              </article>
            ))}
          </section>
        )}
        <section>
          <h3>
            {id === 'mmeasy' ? '유저 피드백 참고 개선 사항' : '개선 사항'}
          </h3>
          {improvement.map((issue) => (
            <article key={issue.title} className="w-2/4">
              <h5>{issue.title}</h5>
              <p>→ {issue.info}</p>
            </article>
          ))}
        </section>
        <section>
          <h3>회고</h3>
          <p>{retrospect}</p>
        </section>
      </div>
    </main>
  );
};

export default Detail;
