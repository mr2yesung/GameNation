type SectionWrapperProps = {
  sectionRef: React.MutableRefObject<HTMLElement | null>;
  children: React.ReactNode;
};

function SectionWrapper({ sectionRef, children }: SectionWrapperProps) {
  return (
    <section
      ref={sectionRef}
      className="mb-16 flex w-full flex-col items-center justify-center gap-3 overflow-hidden lg:mb-20 lg:gap-5"
    >
      {children}
    </section>
  );
}

export default SectionWrapper;
