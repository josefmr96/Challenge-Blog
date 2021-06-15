import express from 'express';
import { obtenerPosts } from '../controllers/postController.js';

const router = express.Router();

//rutas

router.get('/posts', obtenerPosts ); 
export default router