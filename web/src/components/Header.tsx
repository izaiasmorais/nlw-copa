import Image from "next/image";
import { MagnifyingGlass } from "phosphor-react";
import logoImg from "../assets/logo.svg";

export function Header() {
  return (
    <div className="h-12 flex items-center justify-between mt-12">
      <Image src={logoImg} alt="Logo NLW" />
      <div className="flex gap-2">
        <input
          type="text"
          className="px-4 py-3 bg-gray-600 rounded w-[300px]"
          placeholder="Código do bolão"
        />
        <button
          className="px-4 py-3 bg-yellow-500 text-black rounded font-bold
            flex gap-2 items-center justify-center hover:bg-yellow-700 transition-colors"
        >
          <MagnifyingGlass size={24} />
          BUSCAR
        </button>
      </div>
    </div>
  );
}
