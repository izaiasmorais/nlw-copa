import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface NavlinkProps {
  src: string;
  children: ReactNode;
}

export function Navlink({ src, children }: NavlinkProps) {
  const { asPath } = useRouter();

  const isActive = asPath.startsWith(src) ? true : false;

  const normalStyle =
    "flex gap-2 text-gray-200 hover:text-yellow-500 transition-colors";
  const activeStyle =
    "flex gap-2 text-yellow-500 pb-3 transition-colors border-b-2 border-yellow-500";

  return (
    <Link href={src} className={isActive ? activeStyle : normalStyle}>
      {children}
    </Link>
  );
}
