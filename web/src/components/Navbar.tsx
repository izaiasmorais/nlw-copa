import { SoccerBall, Trophy } from "phosphor-react";
import { Navlink } from "./Navlink";

export function Navbar() {
  return (
    <nav className="mt-16 w-full font-xl flex gap-8">
      <Navlink src="/polls">
        <SoccerBall size={24} />
        Bolões
      </Navlink>

      <Navlink src="/ranking">
        <Trophy size={24} />
        Ranking geral
      </Navlink>
    </nav>
  );
}
