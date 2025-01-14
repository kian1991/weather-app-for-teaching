import { cn } from "../../../lib/utils";

export function Card({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-lg bg-white p-4 shadow-md", props.className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center justify-between", props.className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardBody({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mt-2", props.className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mt-2 flex items-center justify-between", props.className)}
      {...props}
    >
      {children}
    </div>
  );
}
