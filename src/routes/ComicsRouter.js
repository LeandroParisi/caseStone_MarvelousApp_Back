const { Router } = require('express');
const { ComicsController } = require('../controllers');
const { validateToken } = require('../middlewares/validations');
const { addNewComic } = require('../middlewares');

const ComicsRouter = new Router();

ComicsRouter.get('/search', validateToken, ComicsController.searchComics);

ComicsRouter.get('/:id', validateToken, ComicsController.getComicById);

ComicsRouter.post('/:id', addNewComic, validateToken, ComicsController.addFavoriteComic);

ComicsRouter.delete('/:id', validateToken, ComicsController.deleteFavoriteComic);

module.exports = ComicsRouter;
