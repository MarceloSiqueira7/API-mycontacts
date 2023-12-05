const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  // Listar todos os registros
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  // Obter um registro
  async show(request, response) {
    const { id } = request.params;
  
    if(!(await ContactsRepository.findById(id))) {
      // 404: Not found
      return response.status(404).json({error: 'User not found!'});
    };
    response.json(contact);
  };

  //Criar um registro
  async store(request, response) {
    const {name, email, phone, category_id} = request.body;

    const [nameExist, emailExist] = await Promise.all([ ContactsRepository.findByName(name), ContactsRepository.findByEmail(email) ]);
    
    if(!name) {
      return response.status(400).json({error: "Name is required"});
    };
    if(nameExist) {
      return response.status(400).json({error: "This name is already been in use"});
    };

    if(emailExist) {
      return response.status(400).json({error: "This email is already been in use "});
    };

    await ContactsRepository.create({ name, email, phone, category_id });
    response.json({sucess: `User ${name} was created!`});
  };

  //Editar um registro
  async update(request, response) {
    
    const { id } = request.params;
    const {name, email, phone, category_id} = request.body;
    
    if(!(await ContactsRepository.findById(id))) {
      return response.status(404).json({error: "User not found"});
    };

    if(!name) {
      return response.status(404).json({error: "Name is required!"});
    };

    const emailExist = await ContactsRepository.findByEmail(email);

    if(emailExist && emailExist.id !== id) {
      return response.status(404).json({error: "This email is already in use"});
    };


    const contact = await ContactsRepository.update(id, { name, email, phone, category_id} );
    response.json(contact);
  };
  
  //Deletar um registro
  async delete(request, response) {
    const { id } = request.params;
    
    if(!(await ContactsRepository.findById(id))) {
      response.status(404).json({error: 'User not found!'});
    }

    await ContactsRepository.delete(id);
    response.status(200).json({sucess: ` The user ${contact.name} was deleted`});
  }
}
module.exports = new ContactController();

//singleton
// Aqui fica toda nossa regra de negócio da aplicação, onde buscamos um registro, editamos, deletamos e etc
