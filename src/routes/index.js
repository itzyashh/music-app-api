import express from 'express';
import songRouter from './songRoutes/song.route.js';
const rootRouter = express.Router();

rootRouter.use('/songs', songRouter);

export default rootRouter;