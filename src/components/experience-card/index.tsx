import React, { Fragment } from 'react';
import { SanitizedExperience } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const ListItem = ({
  time,
  position,
  company,
  companyLink,
  workedsitelink1,
  workedsitelink2,
  workedsitelink3,
}: {
  time: React.ReactNode;
  position?: React.ReactNode;
  company?: React.ReactNode;
  companyLink?: string;
  workedsitelink1?: string;
  workedsitelink2?: string;
  workedsitelink3?: string;
}) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="my-0.5 text-xs">{time}</div>
    <h3 className="font-semibold">{position}</h3>
    <div className="mb-4 font-normal">
      <a href={companyLink} target="_blank" rel="noreferrer">
        {company}
      </a>
    </div>
    Worked Websites
    <div className="mb-4 font-normal">
  <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
    <li>
      <a href={workedsitelink1} target="_blank" rel="noreferrer">
        {workedsitelink1}
      </a>
    </li>
    <li>
      <a href={workedsitelink2} target="_blank" rel="noreferrer">
        {workedsitelink2}
      </a>
    </li>
    <li>
      <a href={workedsitelink3} target="_blank" rel="noreferrer">
        {workedsitelink3}
      </a>
    </li>
  </ul>
</div>


  </li>
);

const ExperienceCard = ({
  experiences,
  loading,
}: {
  experiences: SanitizedExperience[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          time={skeleton({
            widthCls: 'w-5/12',
            heightCls: 'h-4',
          })}
          position={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          company={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
        />,
      );
    }

    return array;
  };
  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Experience</span>
            )}
          </h5>
        </div>
        <div className="text-base-content text-opacity-60">
          <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
            {loading ? (
              renderSkeleton()
            ) : (
              <Fragment>
                {experiences.map((experience, index) => (
                  <ListItem
                    key={index}
                    time={`${experience.from} - ${experience.to}`}
                    position={experience.position}
                    company={experience.company}
                    companyLink={
                      experience.companyLink
                        ? experience.companyLink
                        : undefined
                    }
                    workedsitelink1={
                      experience.workedsitelink1
                        ? experience.workedsitelink1
                        : undefined
                    }
                    workedsitelink2={
                      experience.workedsitelink2
                        ? experience.workedsitelink2
                        : undefined
                    }
                    workedsitelink3={
                      experience.workedsitelink3
                        ? experience.workedsitelink3
                        : undefined
                    }
                  />
                ))}
              </Fragment>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
