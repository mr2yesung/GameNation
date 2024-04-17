import SectionWrapper from "../SectionWrapper";

import { valuesContent } from "../../constants/values";

function Values() {
  return (
    <SectionWrapper>
      <h2 className="px-6 text-center">{valuesContent.title}</h2>
      <p className="section-text px-10 text-center">{valuesContent.intro}</p>

      <ul className="grid grid-cols-1 items-center justify-center gap-y-8 px-10 pt-10 md:grid-cols-2 md:gap-x-10 lg:gap-x-16 lg:gap-y-12 lg:px-6 lg:pt-14 xl:grid-cols-4">
        {valuesContent.values.map((value) => (
          <li
            key={value.id}
            className={`flex max-w-[300px] flex-col gap-y-4 border-l-4 pl-5 ${value.borderStyle}`}
          >
            <h3
              className={`text-start text-3xl font-semibold ${value.textStyle}`}
            >
              {value.title}
            </h3>
            <p className="text-start text-base">{value.text}</p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}

export default Values;
