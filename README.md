# Sistema Verdes Mares: Frontend Coding Test

## Descrição do Projeto
Este projeto é uma aplicação React que lista as notícias mais recentes, permitindo ao usuário navegar entre elas, ler detalhes e realizar buscas por autor e título. A aplicação respeita várias regras de negócio


## Tecnologias Utilizadas
- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **MUI (Material-UI)**: Biblioteca de componentes para React, utilizada para estilizar a aplicação.
- **Bootstrap**: Framework CSS utilizado para garantir um design responsivo.
- **Axios**: Biblioteca para realizar requisições HTTP para a API de notícias.
- **React Router DOM**: Para gerenciar as rotas da aplicação.
- **CSS Customizado**: Para garantir uma aparência visualmente consistente:
  
  > Exemplo CSS Customizado

  ```javascript
  const styles = {
    app: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    app__header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    app__title: {
      fontSize: '24px',
      fontWeight: '800',
      lineHeight: '24px',
      letterSpacing: '2%',
      fontFamily: 'var(--poppins)',
      marginBottom: '32px',
    },
    app__text: {
      textAlign: 'center',
      color: 'var(--description-color)',
      fontSize: '20px',
      fontFamily: 'var(--robotoCondensed)', 
      lineHeight: '27.5px',
      marginBottom: '40px',
    },
  };
  ```

## Requisitos
### Requisitos Funcinais
- [x] Deve ser possível listar as notícias mais recentes em ordem cronológica;
- [x] Deve ser possível listar as notícias com `thumbnail`, `heading`, `description`, `author`, `image`, `category` e `source`;
- [x] Deve ser possível acessar a notícia pelo `slug`;
- [x] Deve ser possível o usuário buscar notícias desejada pelo `heading`;
- [x] Deve ser possível o usuário buscar notícia por `author`;
- [x] Deve ser possível o usuário ler uma notícia;
- [x] Deve ser possível salvar um `id` da notíca lida;
      
### Regras de negócio
- [x] O usuário não pode ler mais que 2 vezes a mesma notícia;
- [x] O usuário não pode ler uma notícia com o JavaScript desabilitado;
- [x] O usuário não pode ler uma notícia em modo anônimo;
- [x] O usuário não poderá acessar uma página de categoria;
- [x] O usuário não poderá acessar uma página de author;
- [x] O usuário deverá ser redirecionado para página principal quando tentar acessar a página de categoria;
      
### Requisitos não-funcionais
- [x] Dynamic Routes: o `slug` da notícida deve ser: `/[category]/[heading]-[id]`
- [x] O `id` da notícia lida precisam estar persistidos em `localStorage`;
- [x] O `id` da notícia persistida em `localStorage`, deve ser retornado quando passado o nome da chave `articles_read`;
- [x] A lista de notícias deve estar paginadas com 20 itens por página;
- [x] A lista de notícias deve exibir as últimas notícias em ordem cronológica;
- [x] O usuário com JavaScript desabilitado no Browser deverá ser direcionado para page-block;
- [x] O usuário em aba anônimo no Browser deverá ser direcionado para page-block;
- [x] O usuário com mais de 10 leituras diferentes deverá ser direcionado para page-block;


## Instalação

Antes de começar, você precisará ter os seguintes itens instalados no seu sistema:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Yarn](https://yarnpkg.com/) (opcional, mas recomendado)

> **Observação:** Outras opções de gerenciadores de pacotes, como o npm, também são compatíveis.

1. **Clone o repositório**:
> Abra o terminal e execute o seguinte comando para clonar o repositório:

   ```bash
   git clone //github.com/ryssaes/job-frontend-developer.git
   ```

2. **Navegue até o diretório do projeto**:

  ```bash
  cd job-frontend-developer/
  ```

3. **Instale as dependências**:

  ```bash
  yarn install
  ```

4. **Inicie o servidor de desenvolvimento**:

  ```bash
  yarn start
  ```


   
