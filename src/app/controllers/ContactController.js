const ContactsRepository = require('../repositories/ContactsRepository')

class ContactController {
  async index(request, response) {
    // Listar todos os registros
    const contacts = await ContactsRepository.findAll()
    response.json(contacts);
  }

  async show(request, response) {
    // Obter um registro
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if(!contact) {
      response.status(404).json({error: 'User not found!'})
    }

    response.json(contact)
  }

  store() {
    //Criar um registro
  }

  update() {
    //Editar um registro
  }
  
  async delete(request, response) {
    //Deletar um registro
    const { id } = request.params
    const contact = await ContactsRepository.findById(id)

    if(!contact) {
      response.status(404).json({error: 'User not found!'});
    }

    await ContactsRepository.delete(id);
    response.status(200).json({sucess: ` The user ${contact.name} was deleted`})
  }
}
module.exports = new ContactController()

//singleton
// Aqui fica toda nossa regra de negócio da aplicação, onde buscamos um registro, editamos, deletamos e etc
