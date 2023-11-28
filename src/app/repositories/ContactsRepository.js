const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Marcelo',
    email: 'Marcelojobxt7@gmail.com',
    phone: '5527988596066',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Luciana',
    email: 'Luciana115@gmail.com',
    phone: '5527988596066',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Juliana',
    email: 'Juliana720@gmail.com',
    phone: '5527988596066',
    category_id: v4(),
  },
];


class ContactsRepository {
  findAll() {
    return new Promise((resolve) => { resolve(contacts) })
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id)
    ));
  };

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id)
      resolve()
    });
  }
};

module.exports = new ContactsRepository();

// Uso do singleton
// Aqui terá todas as regras de manipulação do banco de dados, 
// Usa-se uma padronização de nomes dos metodos como: findAll => buscar tudo 

//Dentro das funções do meu Repository Pattern, nós nunca teremos uma regra de negócio (ou seja, um if/else)
//Sua única função é acessar o Data Source