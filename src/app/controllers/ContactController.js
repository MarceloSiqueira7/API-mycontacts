const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // Listar todos os registros
    const { orderBy } = request.query
    const contacts = await ContactsRepository.findAll(orderBy);
    response.json(contacts);
  }

  async show(request, response) {
    // Obter um registro
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if(!contact) {
      // 404: Not found
      return response.status(404).json({error: 'User not found!'});
    }

    response.json(contact);
  }

  async store(request, response) {
    //Criar um registro
    const {name, email, phone, category_id} = request.body;

    const [nameExist, emailExist] = await Promise.all([ ContactsRepository.findByName(name), ContactsRepository.findByEmail(email) ])

    if(nameExist) {
      return response.status(400).json({error: "This name is already in use"});
    };

    if(emailExist) {
      return response.status(400).json({error: "This email is already in use "})
    }

    await ContactsRepository.create({ name, email, phone, category_id });
    response.json({sucess: `User ${name} was created!`})
  }

  async update(request, response) {
    //Editar um registro
    const { id } = request.params
    const {name, email, phone, category_id} = request.body;

    const contactExist = await ContactsRepository.findById(id)
    if(!contactExist) {
      return response.status(404).json({error: 'User not found'})
    };

    if(!name) {
      return response.status(400).json({error: 'Name is required!'})
    };

   const contactByEmail = await ContactsRepository.findByEmail(email)
   if(contactByEmail && contactByEmail.id !== id) {
      return response.status(400).json({error: 'This email is already in use'})
    }

    const contact = await ContactsRepository.update(id, {name, email, phone, category_id});
    response.json(contact);
  };
  
  async delete(request, response) {
    //Deletar um registro
    const { id } = request.params

    await ContactsRepository.delete(id);
    response.sendStatus(204)
  }
}
module.exports = new ContactController()

//singleton
// Aqui fica toda nossa regra de negócio da aplicação, onde buscamos um registro, editamos, deletamos e etc
