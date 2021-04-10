const { Router } = require('express');
const { ComicsController } = require('../controllers');

const ComicsRouter = new Router();

ComicsRouter.get('/search', ComicsController.searchComics);

ComicsRouter.get('/:id', ComicsController.getComicById);

ComicsRouter.post('/:id', ComicsController.addFavoriteComic);

ComicsRouter.put('/:id', ComicsController.editFavoriteComic);

module.exports = ComicsRouter;
