type SectionWrapperProps = {
  children: React.ReactNode;
};

function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <section className="flex w-full flex-col items-center justify-center overflow-hidden gap-3 lg:gap-5 mb-16 lg:mb-20">
      {children}
    </section>
  );
}

export default SectionWrapper;
