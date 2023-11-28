// Aqui fica toda nossa regra de negócio da aplicação, onde buscamos um registro, editamos, deletamos e etc

class ContactController {
  index(request, response) {
    // Listar todos os registros
    response.send('Hello World!!!!')
  }

  show() {
    // Obter um registro
  }

  store() {
    //Criar um registro
  }

  update() {
    //Editar um registro
  }
  
  delete() {
    //Deletar um registro
  }
}
//singleton
module.exports = new ContactController()

