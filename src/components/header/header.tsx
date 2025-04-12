import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

function HeaderRoot({ children }: HeaderProps) {
  return (
    <div className="pb-10 flex items-center justify-between">{children}</div>
  );
}

function HeaderTitle({ children }: HeaderProps) {
  return <h1 className="font-medium text-3xl text-center">{children}</h1>;
}

function HeaderActions({ children }: HeaderProps) {
  return <div className="flex items-center gap-3">{children}</div>;
}

export { HeaderRoot, HeaderTitle, HeaderActions };
