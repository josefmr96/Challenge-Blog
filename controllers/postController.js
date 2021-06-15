import {Post} from '../models/Posts.js';
import { Categorias } from '../models/Categorias.js';
const obtenerPosts = async (req,res)=>{
    //encontrar un usuario con el mismo correo
    const obtenerPosts = await Post.findAll({ 
        include:
            [{model: Categorias, attributes:['categorias']}],
        order:
            [['fecha_creacion', 'DESC']], 
        attributes: 
            ['idpost', 'titulo', 'imagen', 'fecha_creacion']})

    res.json({obtenerPosts});
    

}
const obtenerPostID = async (req,res)=>{
    //encontrar un usuario con el mismo correo
    const{idpost}=req.params

    const obtenerPostID = await Post.findOne({ where:{idpost}, include:
        [{model: Categorias}]});
        if(obtenerPostID){

            res.json({obtenerPostID});
        }else{
            res.status(404).json({message:`El  post con el id ${idpost} no ha sido encontrado`})
        }

    

}
export{
    obtenerPosts,
    obtenerPostID
}