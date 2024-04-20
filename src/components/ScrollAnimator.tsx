import { useScrollAnimation } from "../hooks/useScrollAnimation";

type ScrollAnimatorProps = {
  children: React.ReactNode;
};

function ScrollAnimator({ children }: ScrollAnimatorProps) {
  const { divRef, isVisible } = useScrollAnimation();

  return (
    <div
      ref={divRef}
      className={`w-full transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
    >
      {children}
    </div>
  );
}

export default ScrollAnimator;
