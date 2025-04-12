import { ComponentProps, ReactNode } from "react";

interface NavbarProps {
  children: ReactNode;
}

interface NavbarLinkProps extends ComponentProps<"a"> {
  children: ReactNode;
}

function NavbarRoot({ children }: NavbarProps) {
  return (
    <div className="flex z-50 sticky top-0 bg-background border-b border-border py-4 w-full text-foreground">
      {children}
    </div>
  );
}

function NavbarContent({ children }: NavbarProps) {
  return (
    <div className="w-11/12 mx-auto gap-10 flex items-center justify-between">
      {children}
    </div>
  );
}

function NavbarLeftSide({ children }: NavbarProps) {
  return <div className="flex items-center gap-7">{children}</div>;
}

function NavbarLogo(props: NavbarLinkProps) {
  return <a {...props}>{props.children}</a>;
}

function NavbarLinks({ children }: NavbarProps) {
  return <div className="flex items-center gap-7">{children}</div>;
}

function NavbarLink(props: NavbarLinkProps) {
  return (
    <a
      {...props}
      className="text-zinc-500 text-sm cursor-pointer font-light hover:text-foreground"
    >
      {props.children}
    </a>
  );
}

function NavbarRightSide({ children }: NavbarProps) {
  return <div className="flex items-center gap-5">{children}</div>;
}

export {
  NavbarRoot,
  NavbarContent,
  NavbarLeftSide,
  NavbarLogo,
  NavbarLinks,
  NavbarLink,
  NavbarRightSide,
};
