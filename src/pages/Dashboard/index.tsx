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
            diretamente na plataforma da Marvel, sendo escalável para adicionar mais conteúdo de forma simples.
          </li>
          <li>
            Permite visualizar detalhes de <strong>personagens</strong> e <strong>eventos </strong>
            diretamente na plataforma da Marvel, sendo escalável para adicionar mais conteúdo de forma simples.
          </li>
        </ul>
      </section>
      <section className="project-tech">
        <h2>Tecnologias Utilizadas</h2>
        <p>
          A interface foi construída de maneira intuitiva, empregando boas práticas de desenvolvimento em React,
          como:
        </p>
        <ul>
          <li>Hooks para gerenciamento de estado.</li>
          <li>Chamadas assíncronas à API da Marvel.</li>
          <li>Operadores lógicos para exibição condicional de conteúdo.</li>
        </ul>
      </section>
      <section className="project-advantages">
        <h2>Diferenciais</h2>
        <p>
          A estrutura modular permite fácil manutenção e escalabilidade.
          O uso da API da Marvel oferece uma vasta gama de dados, tornando o projeto interessante
          para os fãs de quadrinhos e super-heróis.
        </p>
        <p>
          Conceitos modernos de desenvolvimento front-end foram aplicados, como o consumo de APIs RESTful
          e manipulação de dados dinâmicos.
        </p>
      </section>
    </div>
  );
};

export default Dashboard;