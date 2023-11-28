const { uuid } = require('uuidv4')
const contacts = [
  {
    id: uuid(),
    name: 'Marcelo',
    email: 'Marcelojobxt7@gmail.com',
    phone: '5527988596066',
    category_id: uuid(),
  },
]


class ContactsRepository {
  findAll() {
    return contacts
  }
}

module.exports = new ContactsRepository();

// Uso do singleton
// Aqui terá todas as regras de manipulação do banco de dados, 
// Usa-se uma padronização de nomes dos metodos como: findAll => buscar tudo  