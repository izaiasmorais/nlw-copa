import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import logoImg from "../assets/logo.svg";

export function Header() {
  const [code, setCode] = useState("");

  return (
    <div className="h-12 flex items-center justify-between mt-12">
      <Link href="/">
        <Image src={logoImg} alt="Logo NLW" height={35} />
      </Link>
      <div className="flex gap-2">
        <input
          type="text"
          maxLength={6}
          value={code.toLocaleUpperCase()}
          onChange={(e) => setCode(e.target.value)}
          className="px-4 py-[10px] bg-gray-700 hover:bg-gray-600 rounded w-[300px]"
          placeholder="Código do bolão"
        />
        <button
          className="px-4 py-[10px] bg-yellow-500 text-black rounded font-semibold
            flex gap-2 items-center justify-center hover:bg-yellow-700 transition-colors"
        >
          <MagnifyingGlass size={20} />
          BUSCAR
        </button>
      </div>
    </div>
  );
}
