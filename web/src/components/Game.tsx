import Image from "next/image";
import Link from "next/link";
import AvatarsImg from "../assets/people.png";

export function Game() {
  return (
    <Link href="/polls/jogos-do-brasil">
      <div
        className="flex flex-col p-4 bg-gray-700 rounded border-b-2
    border-yellow-500 hover:bg-gray-600 transition-colors"
      >
        <h1 className="font-bold text-lg">JOGOS DO BRASIL</h1>
        <p className="font-normal text-sm mt-1 text-gray-200">
          Criado por Izaías
        </p>
        <Image src={AvatarsImg} alt="avatares" className="mt-6" />
      </div>
    </Link>
  );
}
