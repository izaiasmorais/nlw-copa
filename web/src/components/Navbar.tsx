import Link from "next/link";
import { SoccerBall, Trophy } from "phosphor-react";

export function Navbar() {
  return (
    <nav
      className="mt-16 w-full border-b-[1px] border-gray-500 font-xl
    flex gap-8"
    >
      <Link href="/polls">
        <p
          className="pb-4 text-yellow-500 border-b-2 border-yellow-500
        text-md  flex gap-2 hover:text-yellow-500"
        >
          <SoccerBall size={24} />
          Bolões
        </p>
      </Link>

      <Link href="/ranking">
        <p
          className="pb-4 text-gray-200 border-b-2 border-transparent text-md
         flex gap-2 hover:text-yellow-500"
        >
          <Trophy size={24} />
          Ranking geral
        </p>
      </Link>
    </nav>
  );
}
