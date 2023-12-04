const router = require('express').Router();
const usersController = require('./../src/controllers/users');
const recipesController = require('./../src/controllers/recipes');


router.get('/users', usersController.listar);
router.get('/users/:id', usersController.ver);
router.post('/users', usersController.crear);
router.put('/users/:id', usersController.editar);
router.delete('/users/:id', usersController.eliminar);

router.get('/recipes', recipesController.listar);
router.get('/recipes/:id', recipesController.ver);
router.post('/recipes', recipesController.crear);
router.put('/recipes/:id', recipesController.editar);
router.delete('/recipes/:id', recipesController.eliminar);
module.exports = router;