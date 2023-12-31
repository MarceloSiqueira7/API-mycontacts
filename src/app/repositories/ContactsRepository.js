const db = require('../../database')

class ContactsRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
    SELECT contacts.*, categories.name AS category_name 
    FROM contacts 
    RIGTH JOIN categories ON categories.id = contacts.category_id
    ORDER BY contacts.name ${direction}`);
    return rows;
  };

  async findById(id) {
    const [row] = await db.query(`
    SELECT contacts.*, categories.name AS category_name 
    FROM contacts 
    LEFT JOIN categories ON categories.id = contacts.category_id
    WHERE contacts.id = $1`, [id]);
    return row;
  };

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [email]);
    return row;
  };

  async findByName(name) {
    const [row] = await db.query('SELECT * FROM contacts WHERE name = $1', [name]);
    return row;
  };

  async create({name, email, phone, category_id}) {
    const [row] = await db.query(
      `INSERT INTO contacts(name, email, phone, category_id)
       VALUES($1, $2, $3, $4)
       RETURNING *
    `, [name, email, phone, category_id]);

    return row;
  };

  async update(id, {name, email, phone, category_id}) {
    const [row] = await db.query(`
      UPDATE contacts
      SET name = $1, email = $2, phone = $3, category_id = $4
      WHERE id = $5
      RETURNING *
    `, [name, email, phone, category_id, id]); 
    return row
  }

  async delete(id) {
    const deleteOp = await db.query(`DELETE FROM contacts WHERE id = $1`, [id]);
    return deleteOp 
  };


};

module.exports = new ContactsRepository();

// Uso do singleton
// Aqui terá todas as regras de manipulação do banco de dados, 
// Usa-se uma padronização de nomes dos metodos como: findAll => buscar tudo 

//Dentro das funções do meu Repository Pattern, nós nunca teremos uma regra de negócio (ou seja, um if/else)
//Sua única função é acessar o Data Source