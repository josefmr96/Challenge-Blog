import express from 'express';
import { obtenerPosts, obtenerPostID } from '../controllers/postController.js';

const router = express.Router();

//rutas

router.get('/posts', obtenerPosts ); // Obtener todos los Posts
router.get('/posts/:idpost', obtenerPostID );  //
export default router