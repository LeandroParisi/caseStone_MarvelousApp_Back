<h1 align="center">Marvelous App - back:</h1>
<h2 align="center">Projeto para o processo Stone 2021</h2>
<p align="center"><a href="marvelousapp-front.herokuapp.com/">Aplicação em produção</a></p>

<hr />

## Abstract:
Aplicação back end para nutrir o <a href="https://github.com/LeandroParisi/case-stone-front">front do projeto</a></p>

<hr />

## Installation and Setup Instructions 

1. Clone este repositório.

2. Instale <a href="https://www.npmjs.com/get-npm" >NPM</a> e <a href="https://www.alura.com.br/artigos/mysql-do-download-e-instalacao-ate-sua-primeira-tabela" >SQL</a>:

3. Installation:
    `npm install`  

4. Crie um arquivo .env e com as seguintes chaves:
    PORT=3001
    MYSQL_USER=[seu username no SQL]
    MYSQL_PASSWORD=[seu password no SQL]
    HOSTNAME=localhost
    MARVELAPI_PRIVATE_KEY=b4fabee5120316f888771c36ed0dac5e8c1bf7b9
    MARVELAPI_PUBLIC_KEY=598183ed1a4951bb8782864bc47a8a46
    SECRET=MY_MARVELOUS_APP

5. Crie o banco no sequelize e rode as migrations:
    npx sequelize db:create
    npx sequelize db:migrate

6. To Run Test Suite (not implemented yet):  

    `npm test`  

7. To Start Server:

    `npm start`  

<hr />
