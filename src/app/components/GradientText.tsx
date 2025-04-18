import clsx from "clsx"

export const GradientText = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <span className={clsx("bg-gradient-to-bl from-blue-700 to-blue-500 bg-clip-text text-transparent", className)}>
      {children}
    </span>
  );
};
