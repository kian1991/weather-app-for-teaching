import { cn } from "../../lib/utils";
import { Size } from "../../types";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: Size;
};

export function Button({ children, size, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "rounded bg-slate-900 font-bold text-white hover:bg-slate-800",
        {
          "px-2 py-1 text-sm": size === "sm",
          "px-4 py-2": size === "md",
          "px-6 py-3 text-lg": size === "lg",
        },
        props.className,
      )}
    >
      {children}
    </button>
  );
}
