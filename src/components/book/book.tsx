import { ComponentProps, ReactNode } from "react";

interface BookProps {
  children: ReactNode;
}

interface BookImageProps extends ComponentProps<"img"> {
  src: string;
  alt: string;
}

function BookImage(props: BookImageProps) {
  return (
    <img
      {...props}
      src={props.src}
      alt={props.alt}
      className={`rounded w-20 max-w-44 max-h-64 sm:w-32 md:w-36 xl:w-40 2xl:w-44`}
    />
  );
}

function BookTitle({ children }: BookProps) {
  return <h1 className="text-sm font-medium truncate max-w-44">{children}</h1>;
}

function BookAuthor({ children }: BookProps) {
  return <span className="text-zinc-500 text-xs">{children}</span>;
}

export { BookImage, BookTitle, BookAuthor };
