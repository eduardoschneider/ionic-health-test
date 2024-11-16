# Marvel - Ionic Health Test

Projeto em React consumindo a API pública da Marvel. Criado utilizando o Vite.

## Visão Geral

### Funcionalidades

- **Autenticação**: Protege rotas privadas e redireciona usuários não autenticados.
- **Lista Responsiva**: Exibição de dados com suporte a dispositivos móveis.
- **Paginação**: Controle de navegação entre páginas de dados indexado pela URL.
- **Pesquisa**: Pesquisa indexada pela URL.

## Tecnologias Utilizadas

- **React 18**: Biblioteca para construção da interface do usuário.
- **TypeScript**: Superset do JavaScript com tipagem estática.
- **Axios**: Biblioteca para requisições HTTP.
- **React Router**: Biblioteca para roteamento e navegação.
- **SCSS**: Pré-processador CSS para estilização.
- **Vite**: Para criação do projeto mais otimizada.

## Estrutura do Projeto

- **/src**: Código fonte do projeto.
  - **/components**: Componentes reutilizáveis.
  - **/pages**: Páginas e rotas do aplicativo.
  - **/utils**: Funções auxiliares e configurações de API.
  - **/services**: Funções e serviços para comunicação com APIs.
  - **/assets**: Arquivos de imagem para estilização.
- **/public**: Arquivos estáticos e de configuração.

## Como usar

### Para rodar esse projeto
```bash
# Clone todos os repositórios necessários, com seus micro-frontends
$ git clone https://github.com/eduardoschneider/ionic-health-test

# Acesse seus repositórios, instale as dependencias e execute
$ cd ionic-health-test
$ npm install
$ npm run dev

Rodando no localhost:5173

```
## Utilizando
- Agora você acessa http://localhost:5173 e o projeto deve estar funcionando normalmente.
- Para logar, é utilizado a DummyApi de usuários, um exemplo seria:
- Login: michaelw Senha: michaelwpass
