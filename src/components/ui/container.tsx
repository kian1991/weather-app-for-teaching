import { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export function Container({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mx-auto max-w-2xl", props.className)} {...props}>
      {children}
    </div>
  );
}
