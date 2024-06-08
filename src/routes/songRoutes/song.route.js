import express from 'express';
import { getAllSongs } from '../../controllers/SongControllers/song.controller.js';

const router = express.Router();

router.get('/getAll', getAllSongs);

export default router;