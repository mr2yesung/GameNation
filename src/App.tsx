import Hero from "./components/hero/Hero";
import Games from "./components/games/Games";

function App() {
  return (
    <div className="mx-auto flex max-w-[1920px] flex-col items-center overflow-hidden">
      <Hero />
      <Games />
    </div>
  );
}

export default App;
