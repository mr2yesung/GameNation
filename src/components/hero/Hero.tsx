import ButtonWhite from "../ButtonWhite";

import { heroContent } from "../../constants/hero";

function Hero() {
  return (
    <main className="relative flex max-h-screen w-full flex-col items-center justify-center gap-16 overflow-hidden bg-gradient-to-b from-primary/0 via-primary/40 to-primary py-96 lg:gap-20">
      {/* Hero Background */}
      <div className="pointer-events-none absolute -z-10 h-full w-full bg-[url('/images/hero-1x.png')] bg-cover bg-[right_30%_top_50%] bg-no-repeat sm:bg-[right_40%_top_50%] md:bg-[url('/images/hero-2x.png')] md:bg-[right_30%_top_50%] lg:bg-center"></div>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center gap-5 lg:gap-8">
        <h1 className="px-4 text-center text-[2.5rem] font-semibold leading-[3.25rem] tracking-tight md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]">
          {heroContent.title}
        </h1>
        <p className="text-center section-text capitalize">
          {heroContent.intro}
        </p>
        <ul className="flex justify-center gap-8">
          {heroContent.icons.map((icon) => (
            <li
              key={icon.title}
              className="flex items-center justify-center gap-2.5"
            >
              {icon.icon}
              <p className="text-sm capitalize">{icon.title}</p>
            </li>
          ))}
        </ul>
      </div>

      <ButtonWhite style="text-base lg:text-lg">
        {heroContent.button}
      </ButtonWhite>
    </main>
  );
}

export default Hero;
