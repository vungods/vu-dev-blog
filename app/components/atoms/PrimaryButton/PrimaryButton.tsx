import { MouseEventHandler } from "react";

export default function PrimaryButton({
  type = "submit",
  className = "",
  processing,
  children,
  onClick,
}: {
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  processing?: boolean;
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        `items-center bg-gradient-to-r from-purple-750 to-purple-350 border border-transparent
                rounded-3xl	 font-semibold text-white uppercase tracking-widest px-16  py-2 text-base
                hover:bg-blue-500 focus:outline-none focus:ring-2
                focus:ring-indigo-500 focus:ring-offset-2
                transition ease-in-out duration-150 ` + className
      }
      disabled={processing}
    >
      {children}
    </button>
  );
}
