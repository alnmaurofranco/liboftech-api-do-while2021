<h1 align="center">
🎓 LibOFTechAPI
</h1>

## 👨‍💻 Padrão de Projeto

* [S.O.L.I.D](https://medium.com/thiago-aragao/solid-princ%C3%ADpios-da-programa%C3%A7%C3%A3o-orientada-a-objetos-ba7e31d8fb25) - Princípios da Programação Orientada a Objetos
* [Clean Code](https://balta.io/artigos/clean-code) - Clean Code  
* [Clean Architecture](https://medium.com/luizalabs/descomplicando-a-clean-architecture-cf4dfc4a1ac6) - Clean Architecture

## 🚀 Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:
* [Node.js](https://nodejs.org/en/) - A JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Typescript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale.
* [Express.js](http://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [Prisma](https://prisma.io/) - Next-generation Node.js and TypeScript ORM
* [PostgreSQL](https://www.postgresql.org/) - The World's Most Advanced Open Source Relational Database
* [Docker](https://www.docker.com/) - Developers Love Docker. Businesses Trust It.
<p>
<img src="https://cdn.svgporn.com/logos/nodejs-icon.svg" alt="nodejs" width="30" height="30" style="margin-left: 5px;"/>
<img src="https://cdn.svgporn.com/logos/express.svg" alt="express" width="30" height="30" style="margin-left: 5px;"/>
<img src="https://cdn.svgporn.com/logos/typescript-icon.svg" alt="typescript" width="30" height="30" style="margin-left: 5px;"/>
<img src="https://cdn.svgporn.com/logos/prisma.svg" alt="prisma" width="30" heigth="30" style="margin-right: 5px;" />
<img src="https://cdn.svgporn.com/logos/postgresql.svg" alt="postgresql" width="30" height="30" style="margin-left: 5px;"/>
<img src="https://cdn.svgporn.com/logos/docker-icon.svg" alt="docker" width="30" heigth="30" style="margin-right: 5px;" />
</p>

## ✨ Funcionalidades
- Autenticação do usuário com e-mail e senha ✅
- Perfil de usuário ✅
- Atualizar perfil de usuário ✅
- Livro favorito do usuário ✅
- Listar todos os livros ✅
- Listar os top 5 livros mais visualizados ✅
- Visualização do livro ✅
- Inserção de novos livros pelo administrador ✅
- Atualização de um livro pelo administrador ✅
- Exclusão de livros pelo administrador ✅

## 👨🏼‍💻 Como executar
Para rodar este projeto é necessário ter [Node.js](https://nodejs.org/) instalado em sua maquina. Caso não tenha ainda basta acessar o site do [Node.js](https://nodejs.org/) e instalar para continuar.

- Clone este repositório com comando
```bash
git clone https://github.com/alnmaurofranco/liboftech-api-do-while2021
```
- Acesse a pasta do projeto
```bash
cd liboftech-api-do-while2021
```
### **🔥 Sem Docker**
- Instale as dependências do projeto com (yarn ou npm) nesse exemplo estou usando **yarn**
```bash
yarn install
```
- Logo depois, você deve renomear o arquivo `.env.example` para `.env` que se encontra na raiz do projeto e modifique a variavel **DATABASE_URL** com suas configurações do seu banco de dados:

```bash
DATABASE_URL="postgresql://USER:PASS@HOST:PORT/DATABASE?schema=public"
```

- Inicie a API com o comando:
```bash
yarn dev:server
```

E pronto agora API estára rodando e pode ser acessado em [`http://localhost:3333/api`](http://localhost:3333/api)

### **🐳 Com Docker**
- Subindo o container do projeto no Docker utilizando o comando abaixo:
```bash
docker-compose up -d
```
- E depois de subir o container, você deve renomear o arquivo `.env.example` para `.env` que se encontra na raiz do projeto e modificar a variavel **DATABASE_URL** com as configurações abaixo:

```bash
DATABASE_URL="postgresql://docker:docker@api-database:5432/libdb?schema=public"
```

E pronto sua API estára rodando com Docker e já pode ser acessado em [`http://localhost:3333/api`](http://localhost:3333/api)

---
Feito com 💚 by AlanM Franco