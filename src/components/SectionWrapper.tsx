type SectionWrapperProps = {
  children: React.ReactNode;
};

function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <section className="mb-16 flex w-full flex-col items-center justify-center gap-3 overflow-hidden lg:mb-20 lg:gap-5">
      {children}
    </section>
  );
}

export default SectionWrapper;
