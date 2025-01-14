import { Button, ButtonProps } from "./button";

export function ButtonPrimary({ children, size, ...props }: ButtonProps) {
  return (
    <Button size={size} {...props} className="bg-slate-500 text-red-500">
      {children}
    </Button>
  );
}
