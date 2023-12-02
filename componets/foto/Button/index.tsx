interface BottonProps {
  text: string;
  type?: "primary" | "secondary";
  handleClick?: () => void;
}

const Botton = ({
  text,
  type = "primary",
  handleClick = () => {},
}: BottonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`bg-white text-black rounded-full ${
        type === "primary" ? "px-8 py-3 font-semibold" : "px-3 py-1"
      } font-semibold hover:scale-105`}
    >
      {text}
    </button>
    
  );
};

export { Botton };
