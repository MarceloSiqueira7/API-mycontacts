// Aqui configuramos todas as rotas que nossa aplicação irá ter.
const { Router } = require('express');
const router = Router()
const ContactController = require('./app/controllers/ContactController');
const CategoryController = require('./app/controllers/CategoryController');

// Rotas de contatos
router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);
router.delete('/contacts/:id', ContactController.delete);

// Rotas de categorias
router.get('/categories', CategoryController.index); 
router.get('/categories/:id', CategoryController.show); 
router.get('/categories', CategoryController.store);
router.get('/categories/:id', CategoryController.update)
module.exports = router;


