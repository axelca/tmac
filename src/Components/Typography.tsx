import { Component } from "../Types/common";

interface Props extends Component {
  variant?: "h1" | "h2" | "h3" | "logo";
  inverted?: boolean;
}

const Typography = ({ variant, children, inverted }: Props) => {
  const color = inverted ? "text-zinc-900" : "text-stone-200";

  if (variant === "h1")
    return (
      <h1
        className={
          color + " font-din uppercase text-3xl font-extrabold sm:text-5xl mb-4"
        }
      >
        {children}
      </h1>
    );
  if (variant === "h2")
    return (
      <h2
        className={
          color + " font-din uppercase text-2xl font-extrabold sm:text-3xl mb-4"
        }
      >
        {children}
      </h2>
    );
  if (variant === "h3")
    return (
      <h2
        className={
          color + " font-din uppercase text-1xl font-extrabold sm:text-2xl mb-4"
        }
      >
        {children}
      </h2>
    );
  if (variant === "logo")
    return (
      <h1
        className={
          color +
          " text-4xl font-din uppercase sm:text-5xl drop-shadow-[1px_1px_4px_rgba(64,228,74,0.7)] flex w-full justify-center h-full items-center"
        }
      >
        {children}
      </h1>
    );

  return <p className={color + " mb-6 font-din"}>{children}</p>;
};

export default Typography;
