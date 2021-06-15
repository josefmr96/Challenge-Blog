import express from 'express';
import { obtenerPosts, obtenerPostID, crearPost, actualizarPost, eliminarPost } from '../controllers/postController.js';

const router = express.Router();

//rutas

router.get('/posts', obtenerPosts ); // Obtener todos los Posts
router.get('/posts/:idpost', obtenerPostID );  // Obtener Post por ID

router.post('/posts', crearPost ); // Crear Post
router.patch('/posts/:idpost', actualizarPost ); // Actualizar Post  por ID
router.delete('/posts/:idpost', eliminarPost ); // Eliminar Post  por ID

export default router