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

4. Faça um cadastro na <a href="https://developer.marvel.com/API" >API da marvel</a> para poder se conectar, ao se cadastrar vai receber duas chaves (PRIVATE_KEY, PUBLIC_KEY), salve-as que vamos usar abaixo.


5. Crie um arquivo .env e com as seguintes chaves:
    PORT=3001
    MYSQL_USER=[seu username no SQL]
    MYSQL_PASSWORD=[seu password no SQL]
    HOSTNAME=localhost
    PRIVATE_KEY=[sua private key]
    PUBLIC_KEY=[sua public key]

6. Crie o banco no sequelize e rode as migrations:
    npx sequelize db:create
    npx sequelize db:migrate

7. To Run Test Suite (not implemented yet):  

    `npm test`  

8. To Start Server:

    `npm start`  

<hr />
