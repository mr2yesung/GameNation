import SectionWrapper from "../SectionWrapper";

import { teamContent } from "../../constants/team";

type TeamProps = {
  teamRef: React.MutableRefObject<HTMLElement | null>;
};

function Team({ teamRef }: TeamProps) {
  return (
    <SectionWrapper sectionRef={teamRef}>
      <h2 className="px-6 text-center">{teamContent.title}</h2>
      <p className="section-text px-10 text-center">{teamContent.intro}</p>

      <ul className="my-6 grid grid-cols-2 gap-8 md:gap-x-24 lg:my-10 lg:grid-cols-4 lg:gap-x-16">
        {teamContent.members.map((member) => (
          <li key={member.id} className="flex flex-col items-center">
            <img
              className="mb-3 h-[150px] w-[150px] grayscale"
              src={member.image}
              alt={member.name}
            />
            <p className="text-center text-base font-semibold capitalize text-white/90">
              {member.name}
            </p>
            <p className="text-center text-base capitalize text-white/70">
              {member.position}
            </p>
          </li>
        ))}
      </ul>

      <ul className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
        {teamContent.stats.map(({ name, value }) => (
          <li
            key={name}
            className="mr-10 flex items-center gap-x-5 border-l-4 border-white pl-5 lg:mr-0"
          >
            <h3 className="w-[120px] text-start font-mono text-6xl font-semibold lg:w-max">
              {value}
            </h3>
            <p className="w-[100px] text-start text-lg tracking-wider">
              {name}
            </p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}

export default Team;
