import Image from "next/image";
import brImg from "../assets/br.png";
import beImg from "../assets/be.png";

export function Game() {
  return (
    <div
      className="p-4 bg-gray-800 grid justify-center border-b-2
    border-yellow-500 text-center items-center gap-4 rounded"
    >
      <div className="mb-1 gap-1 grid">
        <strong className="font-bold">Brasil vs Alemanha</strong>
        <p className="text-sm text-gray-200">
          22 de Novembro de 2022 às 19:00h
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <input
            type="number"
            max="20"
            className="bg-gray-900 w-16 h-10 rounded border
            border-gray-600 text-gray-200 p-2"
          />
          <Image src={brImg} alt="brazil-flag" className="w-9 h-6" />
        </div>

        <p className="text-gray-200 mx-4">X</p>

        <div className="flex gap-2 items-center">
          <input
            type="number"
            max="20"
            className="bg-gray-900 w-16 h-10 rounded border
            border-gray-600 text-gray-200 p-2"
          />
          <Image src={beImg} alt="belgic-flag" className="w-9 h-6" />
        </div>
      </div>

      <button
        className="bg-ignite-500 w-full rounded text-sm font-semibold py-2
      hover:bg-ignite-600"
      >
        CONFIRMAR PALPITE
      </button>
    </div>
  );
}
