<h1 align="center">Marvelous App - back:</h1>
<h2 align="center">Made for Stone challenge 2021</h2>
<p align="center"><a href="https://marvelousapp-front.herokuapp.com/">Link to production</a></p>
Note that, since the application is built using Heroku free version the first access may take a while to open (initializing front end instance) and to loggin / register user (initializing back end instance).

<hr />

## Abstract:
Back end application to serve <a href="https://github.com/LeandroParisi/case-stone-front">project front end</a></p>

<hr />

## Installation and Setup Instructions 

1. Clone repository

2. Install <a href="https://www.npmjs.com/get-npm" >NPM</a> and <a href="https://www.alura.com.br/artigos/mysql-do-download-e-instalacao-ate-sua-primeira-tabela" >SQL</a>:

3. Installation:
    `npm install`  

4. Create a .env archive on project root with the following content:
    <p>PORT=3001</p>
    <p>MYSQL_USER=[seu username no SQL]</p>
    <p>MYSQL_PASSWORD=[seu password no SQL]</p>
    <p>HOSTNAME=localhost</p>
    <p>MARVELAPI_PRIVATE_KEY=b4fabee5120316f888771c36ed0dac5e8c1bf7b9</p>
    <p>MARVELAPI_PUBLIC_KEY=598183ed1a4951bb8782864bc47a8a46</p>
    <p>SECRET=MY_MARVELOUS_APP</p>

<b>Para a STONE:</b> Sei que não é ideal colocar as chaves privadas assim de forma pública, mas, pensando em facilitar para vocês testarem deixei aqui, após o processo seletivo vou retirar

5. Create DB and run sequelize migrations:
    npx sequelize db:create
    npx sequelize db:migrate

6. To Run Test Suite (not implemented yet):  

    `npm test`  

7. To Start Server:

    `npm start`  

<hr />

## Improvements to be done:

1.
- [ ] Create more routes to serve more categories:
- [ ] creators
- [ ] events
- [ ] series
- [ ] stories

2.
- [ ] Create some other persistent information on DB (like the one made to persist favorite characters) so that the application is less dependant on marvelAPI

3.
- [ ] Implement 80% of test coverage
