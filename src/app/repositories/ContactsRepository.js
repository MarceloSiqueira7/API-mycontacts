const { v4 } = require('uuid');

const db = require('../../database')

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
  async findAll() {
    const [rows] = await db.query(`SELECT * FROM contacts`);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [id]);
    return row;
  };

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [email]);
    return row;
  };

  async findByName(name) {
    const [row] = await db.query('SELECT * FROM contacts WHERE name = $1', [name]);
    return row
  };

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id)
      resolve()
    });
  };

  async create({name, email, phone, category_id}) {
    const [row] = await db.query(
      `INSERT INTO contacts(name, email, phone, category_id)
       VALUES($1, $2, $3, $4)
       RETURNING *
    `, [name, email, phone, category_id]);

    return row;
  };
};

module.exports = new ContactsRepository();

// Uso do singleton
// Aqui terá todas as regras de manipulação do banco de dados, 
// Usa-se uma padronização de nomes dos metodos como: findAll => buscar tudo 

//Dentro das funções do meu Repository Pattern, nós nunca teremos uma regra de negócio (ou seja, um if/else)
//Sua única função é acessar o Data Source