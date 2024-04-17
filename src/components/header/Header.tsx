import { useState } from "react";

import Logo from "../Logo";
import ButtonWhite from "../ButtonWhite";

const navButtons = ["Games", "Team", "Values", "Contact Us"];

function Header() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  function handleToggleNavOpen() {
    setIsNavOpen((isNavOpen) => !isNavOpen);
  }

  return (
    <header className="absolute top-6 z-10 flex w-4/5 max-w-[1536px] justify-between rounded-2xl bg-black px-5 py-4">
      <div className="flex items-center gap-x-14">
        <Logo />
        <nav
          className={`fixed left-0 top-0 z-20 h-screen w-screen flex-col justify-center gap-x-5 gap-y-10 bg-primary/90 lg:static lg:flex lg:h-auto lg:w-auto lg:flex-row lg:bg-transparent ${isNavOpen ? "flex" : "hidden"}`}
        >
          {navButtons.map((navButton) => (
            <button
              key={`nav-${navButton}`}
              className="text-xl tracking-wide text-white/70 transition-colors hover:text-white/90 focus-visible:text-white/90 focus-visible:outline-none lg:text-base"
            >
              {navButton}
            </button>
          ))}
        </nav>
      </div>

      <ButtonWhite style="hidden lg:block">Contact Us</ButtonWhite>

      <button
        className="z-50 fill-white/70 transition-colors hover:fill-white/90 focus-visible:fill-white/90 focus-visible:outline-none lg:hidden"
        onClick={handleToggleNavOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          {isNavOpen ? (
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          ) : (
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          )}
        </svg>
      </button>
    </header>
  );
}

export default Header;
