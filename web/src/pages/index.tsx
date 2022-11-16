import Image from "next/image";
import appPreviewImg from "../assets/aplicacao-trilha-ignite.png";
import logoImg from "../assets/logo.svg";
import usersAvatarImg from "../assets/avatares.png";
import iconCheckImg from "../assets/icon.png";
import { FcGoogle } from "react-icons/fc";
import { api } from "../lib/axios";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import Head from "next/head";
import Link from "next/link";

interface HomeProps {
  pollsCount: number;
  usersCount: number;
  guessesCount: number;
}

export default function Home({
  pollsCount,
  usersCount,
  guessesCount,
}: HomeProps) {
  const [pollTitle, setPollTitle] = useState("");

  async function createPoll(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await api.post("/polls", {
        title: pollTitle,
      });

      const { code } = response.data;
      await navigator.clipboard.writeText(code);
      setPollTitle("");
      toast.success("Bolão criado com sucesso!");
    } catch (error) {
      toast.error("Ocorreu um erro ao criar bolão!");
      console.log(error);
    }
  }

  return (
    <div className="bg-app bg-no-repeat bg-cover">
      <div
        className="max-w-[1124px] mx-auto grid grid-cols-2 items-center
    h-screen gap-28"
      >
        <Head>
          <title>NLW Copa</title>
        </Head>
        <main>
          <Image src={logoImg} alt="NLW Copa" />
          <h1 className="mt-14 text-white text-5xl font-bold leading-tight">
            Participe de bolões da copa, ganhe pontos e diversas recompensas!
          </h1>
          <div className="mt-10 flex items-center gap-2">
            <Image src={usersAvatarImg} alt="Avatares" quality={100} />
            <strong className="text-gray-100 text-xl">
              <span className="text-ignite-500">+{usersCount}</span> pessoas já
              estão utilizando.
            </strong>
          </div>

          <form className="mt-10 flex gap-2" onSubmit={createPoll}>
            <Link
              className="bg-yellow-500 text-gray-900 text-sm py-4 px-6 rounded
            font-bold hover:bg-yellow-700 transition-colors flex items-center
            gap-2 w-full justify-center"
              type="submit"
              href="polls"
            >
              <FcGoogle size={24} /> ENTRAR COM GOOGLE
            </Link>
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
                <span className="font-bold text-2xl">+{pollsCount}</span>
                <span>Bolões criados</span>
              </div>
            </div>

            <div className="w-px h-16 bg-gray-600" />

            <div className="flex items-center gap-6">
              <Image src={iconCheckImg} alt="" />
              <div className="flex flex-col">
                <span className="font-bold text-2xl">+{guessesCount}</span>
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
    </div>
  );
}

export const getServerSideProps = async () => {
  const [pollsCount, usersCount, guessesCount] = await Promise.all([
    api.get("polls/count"),
    api.get("users/count"),
    api.get("guesses/count"),
  ]);

  return {
    props: {
      pollsCount: pollsCount.data.count,
      usersCount: usersCount.data.count,
      guessesCount: guessesCount.data.count,
    },
  };
};
