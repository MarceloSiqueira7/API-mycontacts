const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {

  //Mostrar todas as Categorias
  async index(request, response) {
    const category = await CategoryRepository.findAll();
    response.json(category);
  };

  //Obter uma Categoria
  show(request, response) {
    response.send('ok - show');
  };

  //Criar uma Categoria
  async store(request, response) {
   const { name } = request.body;

    if(!name) {
      return response.status(400).json({error: 'Name is required!'})
    };

    const category = await CategoryRepository.create({ name });
    response.json(category)
  };

  //Editar uma Categoria
  update(request, response) {
    response.send('ok - update');
  };

  delete(request, response) {
    response.send('ok - delete')
  }
};

module.exports = new CategoryController();