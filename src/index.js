const app = require('express')();
const routes = require('./routes')

app.use(routes)


app.listen(3000, () => console.log('Rodando na prota http://localhost:3000'));



//CONTROLLER: serve para centralizar toda regra de negócio que está relacionado a uma entidade da nossa aplicação 
//O QUE É UMA ENTIDADE?: Imagine que além de contatos, nós temos produtos, usuários e etc, cada "elemento" desse, é uma entidade, sendo asssim
//Cada um teria seu proprio controller  


