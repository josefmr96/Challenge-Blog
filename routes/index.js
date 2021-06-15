import express from 'express';
import { obtenerPosts, obtenerPostID, crearPost, actualizarPost } from '../controllers/postController.js';

const router = express.Router();

//rutas

router.get('/posts', obtenerPosts ); // Obtener todos los Posts
router.get('/posts/:idpost', obtenerPostID );  // Obtener Posts por ID

router.post('/posts', crearPost ); // Crear Post

router.patch('/posts/:idpost', actualizarPost ); // Actualizar Post seleccionado por ID

export default router