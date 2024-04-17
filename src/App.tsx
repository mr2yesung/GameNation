import { useRef } from "react";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Games from "./components/games/Games";
import Team from "./components/team/Team";
import Values from "./components/values/Values";
import Contact from "./components/contact/Contact";
import FollowUs from "./components/follow us/FollowUs";
import Footer from "./components/footer/Footer";

function App() {
  const gamesRef = useRef<HTMLElement | null>(null);
  const teamRef = useRef<HTMLElement | null>(null);
  const valuesRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  return (
    <div className="mx-auto flex max-w-[1920px] flex-col items-center overflow-hidden">
      <Header
        gamesRef={gamesRef}
        teamRef={teamRef}
        valuesRef={valuesRef}
        contactRef={contactRef}
      />

      <Hero />

      <Games gamesRef={gamesRef} />
      <Team teamRef={teamRef} />
      <Values valuesRef={valuesRef} />
      <Contact contactRef={contactRef} />

      <FollowUs />
      <Footer />
    </div>
  );
}

export default App;
