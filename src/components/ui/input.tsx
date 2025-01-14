import { cn } from "../../lib/utils";
import { Size } from "../../types";

type InputProps = {
  inputSize?: Size;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ inputSize, ...props }: InputProps) {
  return (
    <div className="flex flex-col">
      <input
        {...props}
        className={cn(
          "rounded border border-slate-300 outline-black/40",
          {
            "px-2 py-1 text-sm": inputSize === "sm",
            "px-4 py-2": inputSize === "md",
            "px-6 py-3 text-lg": inputSize === "lg",
          },
          props.className,
        )}
      />
    </div>
  );
}
