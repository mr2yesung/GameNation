import SectionWrapper from "../SectionWrapper";
import ButtonWhite from "../ButtonWhite";

import { gamesContent } from "../../constants/games";

type GamesProps = {
  gamesRef: React.MutableRefObject<HTMLElement | null>;
};

function Games({ gamesRef }: GamesProps) {
  return (
    <SectionWrapper sectionRef={gamesRef}>
      <h2 className="px-6 text-center">{gamesContent.title}</h2>
      <p className="section-text px-10 text-center">{gamesContent.intro}</p>

      <img
        className="my-2 max-w-[80%] overflow-hidden rounded-lg lg:rounded-xl"
        src="/images/game-2x.png"
        srcSet="/images/game-1x.png 1180w, /images/game-2x.png 2360w"
        alt={gamesContent.imgText}
      />

      <ButtonWhite style="text-base capitalize lg:text-lg">
        {gamesContent.button}
      </ButtonWhite>
    </SectionWrapper>
  );
}

export default Games;
