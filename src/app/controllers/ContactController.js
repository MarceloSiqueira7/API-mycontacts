const ContactsRepository = require('../repositories/ContactsRepository')

class ContactController {
  index(request, response) {
    // Listar todos os registros
    const contacts = ContactsRepository.findAll()
    response.json(contacts)
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
module.exports = new ContactController()

//singleton
// Aqui fica toda nossa regra de negócio da aplicação, onde buscamos um registro, editamos, deletamos e etc
