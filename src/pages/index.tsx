import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <h1>
            Olá, mundo! &#128512;
          </h1>
          <span className="handle">Eu sou o <span className="fancy">Lucas Mota</span> e este é o meu site.</span>
          <p>Você pode entrar em contato comigo através das redes listadas abaixo.</p>
          <SocialList />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
          padding-bottom: 5px;
        }
        p {
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #1C1C1C;
          font-weight: 600;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #2E2E2E;
          letter-spacing: 0.05em;
          font-size: 1.0rem;
          font-weight: 400;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
        }
      `}</style>
    </Layout>
  );
}
