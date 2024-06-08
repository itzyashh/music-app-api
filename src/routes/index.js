import express from 'express';
import songRouter from './songRoutes/song.route.js';
import searchRouter from './search/SearchRoute.js';
const rootRouter = express.Router();

rootRouter.use('/songs', songRouter);
rootRouter.use('/songs', searchRouter);

export default rootRouter;