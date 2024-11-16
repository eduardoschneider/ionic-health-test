import './styles.scss';

const Dashboard: React.FC = () => {

  return (
    <div>
      Este projeto foi desenvolvido para explorar e exibir informações dinâmicas do universo Marvel, utilizando a API da Marvel em conjunto com React. A aplicação permite que os usuários busquem por personagens, quadrinhos e eventos diretamente na plataforma da Marvel, proporcionando uma experiência interativa e envolvente.

Ao fazer uso de parâmetros de URL, como o search, a aplicação exibe automaticamente uma frase personalizada, como "Buscando por [termo de busca]", oferecendo um feedback imediato e claro ao usuário sobre a sua consulta. Isso é feito de forma eficiente, utilizando operadores lógicos que garantem que o texto seja mostrado apenas quando um termo de pesquisa válido for passado.

A interface foi construída de maneira intuitiva, empregando boas práticas de desenvolvimento em React, como a utilização de hooks para gerenciamento de estado e chamadas assíncronas à API. A estrutura modular permite fácil manutenção e escalabilidade, e a combinação com a API da Marvel oferece uma vasta gama de dados que tornam o projeto interessante e envolvente para os fãs de quadrinhos e super-heróis.

Este projeto também demonstra o uso de conceitos modernos em desenvolvimento front-end, como o consumo de APIs RESTful e a manipulação de dados para criar uma experiência dinâmica e personalizada para os usuários.


    </div>
  );
};

export default Dashboard;