import { Game } from "../../components/Game";
import { Layout } from "../../components/Layout";

export default function PollDetails() {
  return (
    <Layout title="NLW Copa | Bolões">
      <div className="grid grid-cols-4 gap-8 mt-12">
        <Game />
        <Game />
        <Game />
        <Game />
      </div>
    </Layout>
  );
}
