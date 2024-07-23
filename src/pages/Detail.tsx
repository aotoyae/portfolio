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
    <main className="h-full pt-[3vh] pb-[10vh]">
      <h3>{name}</h3>
      <div className="flex flex-col h-full gap-20">
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
            <h5 className="pb-2 italic">{subTitle}</h5>
            <p className="pb-16 leading-normal">{info}</p>
            <p className="pb-2">{date}</p>
            <p className="pb-3">{member}</p>
            <h5 className="leading-normal">{skill}</h5>
          </article>
          <img
            src={thumbnail}
            alt="프로젝트 썸네일"
            className="w-3/5 h-[60vh] object-contain"
          />
        </section>
        <section>
          <h3 className="pb-6 font-semibold">담당 기능</h3>
          <article className="grid grid-cols-3 gap-3 leading-normal">
            {feature.map((issue) => (
              <div key={issue.title} className="pb-16">
                <img
                  src={issue.image}
                  alt="기능 이미지"
                  className="object-cover w-full h-[30vh]"
                  // className={`object-contain w-full h-[30vh] border-solid border-y ${id == 'mmeasy' ? 'border-[#2a83ee]' : id == 'gabaedo' ? 'border-[#dcbaa3]' : 'border-[#ff90b4]'}`}
                />
                <h5 className="pt-5 pb-2 font-semibold">{issue.title}</h5>
                {issue.info &&
                  (Array.isArray(issue.info) ? (
                    issue.info.map((item, idx) => <p key={idx}>{item}</p>)
                  ) : (
                    <p>{issue.info}</p>
                  ))}
              </div>
            ))}
          </article>
        </section>
        {troubleshooting && (
          <section className="mt-[-64px]">
            <h3 className="pb-6 font-semibold">트러블 슈팅</h3>
            <article className="flex flex-col gap-10">
              {troubleshooting.map((issue) => (
                <div key={issue.title} className="w-2/4">
                  <h5 className="pb-4 font-semibold">{issue.title}</h5>
                  {issue.info.length >= 2 ? (
                    issue.info.map((item, idx) => (
                      <p key={idx} className="pb-4 leading-normal">
                        {item}
                      </p>
                    ))
                  ) : (
                    <p className="leading-normal">{issue.info}</p>
                  )}
                </div>
              ))}
            </article>
          </section>
        )}
        <section className={`${id !== 'mmeasy' && 'mt-[-64px]'}`}>
          <h3 className="pb-6 font-semibold">
            {id === 'mmeasy' ? '유저 피드백 참고 개선 사항' : '개선 사항'}
          </h3>
          <article className="flex flex-col gap-4">
            {Array.isArray(improvement) ? (
              improvement.map((issue) => (
                <div key={issue.title} className="w-2/4 leading-normal">
                  <h5>{issue.title}</h5>
                  <p>→ {issue.info}</p>
                </div>
              ))
            ) : (
              <div className="w-2/4 leading-normal">
                <h5>{improvement.title}</h5>
                <p>→ {improvement.info}</p>
              </div>
            )}
          </article>
        </section>
        <section>
          <h3 className="pb-6 font-semibold">회고</h3>
          <p className="leading-normal">{retrospect}</p>
        </section>
      </div>
    </main>
  );
};

export default Detail;
