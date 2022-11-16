import { Poll } from "../components/Poll";
import { Layout } from "../components/Layout";

export default function Polls() {
  return (
    <Layout title="NLW Copa | Bolõess">
      <div className="grid grid-cols-4 gap-4 mt-12">
        <Poll />
        <Poll />
        <Poll />
        <Poll />
      </div>
    </Layout>
  );
}
