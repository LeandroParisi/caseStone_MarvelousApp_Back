const { Router } = require('express');
const { ComicsController } = require('../controllers');
const { validateToken } = require('../middlewares/validations');

const ComicsRouter = new Router();

ComicsRouter.get('/search', validateToken, ComicsController.searchComics);

ComicsRouter.get('/:id', validateToken, ComicsController.getComicById);

ComicsRouter.post('/:id', validateToken, ComicsController.addFavoriteComic);

ComicsRouter.delete('/:id', ComicsController.deleteFavoriteComic);

module.exports = ComicsRouter;
