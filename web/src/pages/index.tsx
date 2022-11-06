import Image from "next/image";
import appPreviewImg from "../assets/aplicacao-trilha-ignite.png";
import logoImg from "../assets/logo.svg";
import usersAvatarImg from "../assets/avatares.png";
import iconCheckImg from "../assets/icon.png";

export default function Home() {
  return (
    <div
      className="max-w-[1124px] mx-auto grid grid-cols-2 items-center
    h-screen gap-28"
    >
      <main>
        <Image src={logoImg} alt="NLW Copa" />
        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>
        <div className="mt-10 flex items-center gap-2">
          <Image src={usersAvatarImg} alt="Avatares" />
          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">+12.000</span> pessoas já estão
            utilizando.
          </strong>
        </div>

        <form className="mt-10 flex gap-2">
          <input
            className="flex-1 py-4 px-6 rounded bg-gray-800 border-gray-600
            text-sm text-gray-100"
            type="text"
            required
            placeholder="Como vai se chamar o seu bolão?"
          />
          <button
            className="bg-yellow-500 text-gray-900 text-sm py-4 px-6 rounded
            font-bold hover:bg-yellow-700 transition-colors"
            type="submit"
          >
            CRIAR MEU BOLÃO
          </button>
        </form>

        <p className="text-gray-300 mt-4 text-sm leading-relaxed">
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas 🚀
        </p>

        <div
          className="mt-10 pt-10 border-t border-gray-600
        text-gray-100 flex justify-between items-center"
        >
          <div className="flex items-center gap-6">
            <Image src={iconCheckImg} alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+2.034</span>
              <span>Bolões criados</span>
            </div>
          </div>

          <div className="w-px h-16 bg-gray-600" />

          <div className="flex items-center gap-6">
            <Image src={iconCheckImg} alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+100.000</span>
              <span>Palpites criados</span>
            </div>
          </div>
        </div>
      </main>

      <Image
        src={appPreviewImg}
        alt="Dois celulares exibindo a aplicação mobile do NLW Copa"
        quality={100}
      />
    </div>
  );
}
