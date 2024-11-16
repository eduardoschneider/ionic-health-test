import './styles.scss';

const Dashboard: React.FC = () => {

  return (
    <div className="project-container">
      <header className="project-header">
        <h1>Explorador do Universo Marvel</h1>
      </header>
      <section className="project-intro">
        <p>
          Este projeto foi desenvolvido para explorar e exibir informações dinâmicas do universo Marvel,
          utilizando a API da Marvel em conjunto com React + Vite.
        </p>
      </section>
      <section className="project-features">
        <h2>Funcionalidades</h2>
        <ul>
          <li>
            Permite buscar por <strong>personagens</strong> e <strong>eventos </strong>
            diretamente na plataforma da Marvel.
          </li>
          <li>
            Permite visualizar detalhes de <strong>personagens</strong> e <strong>eventos </strong>
            diretamente na plataforma da Marvel.
          </li>
          <li>
            Permite filtrar <strong>personagens</strong> e <strong>eventos </strong> baseado na data de modificação
            diretamente na plataforma da Marvel.
          </li>
        </ul>
      </section>
      <section className="project-tech">
        <h2>Tecnologias Utilizadas</h2>
        <p>
          A interface foi construída de maneira intuitiva, empregando boas práticas de desenvolvimento em React e Typescript.
        </p>
        <ul>
          <li>Hooks para gerenciamento de estado.</li>
          <li>Chamadas assíncronas à API da Marvel.</li>
          <li>Objetos, estados e funções com tipos bem definidos.</li>
        </ul>
      </section>
      <section className="project-advantages">
        <h2>Diferenciais</h2>
        <ul>
          <li>
            A estrutura modular permite fácil manutenção e escalabilidade.
          </li>
          <li>
            O design único possibilita a integração de animações para deixar a experiência mais gamificada.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;