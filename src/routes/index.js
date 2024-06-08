import express from 'express';
import songRouter from './songRoutes/song.route.js';
import searchRouter from './search/SearchRoute.js';
import userRouter from './userRoutes/user.route.js';
const rootRouter = express.Router();

rootRouter.use('/songs', songRouter);
rootRouter.use('/songs', searchRouter);

rootRouter.use('/user', userRouter);

export default rootRouter;