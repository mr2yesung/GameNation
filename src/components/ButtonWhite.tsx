type ButtonWhiteProps = {
  style?: string;
  children: React.ReactNode;
};

function ButtonWhite({ style = "", children }: ButtonWhiteProps) {
  return (
    <button
      className={`rounded-lg border border-white bg-transparent px-4 py-1 font-mono transition-colors hover:bg-white hover:text-primary focus-visible:bg-white focus-visible:text-primary focus-visible:outline-none ${style}`}
    >
      {children}
    </button>
  );
}

export default ButtonWhite;
