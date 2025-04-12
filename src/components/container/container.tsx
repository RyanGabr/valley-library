import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return <div className="w-11/12 mx-auto py-10">{children}</div>;
}

function ContainerBookDetails({ children }: ContainerProps) {
  return <div className="w-8/12 mx-auto py-10">{children}</div>;
}

export { Container, ContainerBookDetails };
