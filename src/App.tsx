import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Games from "./components/games/Games";
import Team from "./components/team/Team";
import Values from "./components/values/Values";
import Contact from "./components/contact/Contact";
import FollowUs from "./components/follow us/FollowUs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="mx-auto flex max-w-[1920px] flex-col items-center overflow-hidden">
      <Header />

      <Hero />

      <Games />
      <Team />
      <Values />
      <Contact />

      <FollowUs />
      <Footer />
    </div>
  );
}

export default App;
