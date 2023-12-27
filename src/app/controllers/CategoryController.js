class CategoryController {

  //Mostrar todas as Categorias
  index(request, response) {
    response.send('ok - index');
  };

  //Obter uma Categoria
  show(request, response) {
    response.send('ok - show');
  };

  //Criar uma Categoria
  store(request, response) {
    response.send('ok - store');
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