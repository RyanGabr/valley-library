import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  action: () => void;
}

function Grid({ children }: GridProps) {
  return (
    <div className="grid 2xl:grid-cols-9 xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-4 gap-5">
      {children}
    </div>
  );
}

function GridItem({ children, action }: GridProps) {
  return (
    <div
      onClick={action}
      className="space-y-3 cursor-pointer transition-all hover:scale-95 hover:rotate-1"
    >
      {children}
    </div>
  );
}

export { Grid, GridItem };
