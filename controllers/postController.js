import {Post} from '../models/Posts.js';
import { Categorias } from '../models/Categorias.js';
const obtenerPosts = async (req,res)=>{
    //encontrar un usuario con el mismo correo
    const obtenerPosts = await Post.findAll({ 
        include:
            [{model: Categorias,  attributes: ['categorias'], required: true}],
        order:
            [['fecha_creacion', 'DESC']], 
        attributes: 
            ['idpost', 'titulo', 'imagen', 'fecha_creacion']})

    res.json({obtenerPosts});
    

}
export{
    obtenerPosts
}