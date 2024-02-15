import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="unknown-page">
      <h2>Desculpe, Página não encontrada /:</h2>
      <p>Nós não podemos acessar a página requisitada.</p>
      <Link to="/">Retorne para página principal</Link>
    </div>
  );
};

export default NotFoundPage;
