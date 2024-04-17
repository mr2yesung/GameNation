type ButtonWhiteProps = {
  style?: string;
  handleClick?: () => void;
  children: React.ReactNode;
};

function ButtonWhite({
  style = "",
  handleClick = () => {},
  children,
}: ButtonWhiteProps) {
  return (
    <button
      className={`rounded-lg border border-white bg-transparent px-4 py-1 font-mono transition-colors hover:bg-white hover:text-primary focus-visible:bg-white focus-visible:text-primary focus-visible:outline-none ${style}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default ButtonWhite;
