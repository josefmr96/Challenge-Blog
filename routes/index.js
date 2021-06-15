import express from 'express';
import { obtenerPosts, obtenerPostID, crearPost } from '../controllers/postController.js';

const router = express.Router();

//rutas

router.get('/posts', obtenerPosts ); // Obtener todos los Posts
router.get('/posts/:idpost', obtenerPostID );  // Obtener Posts por ID

router.post('/posts', crearPost ); // Obtener todos los Posts

export default router