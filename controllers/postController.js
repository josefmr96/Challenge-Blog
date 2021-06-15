import {Post} from '../models/Posts.js';
import { Categorias } from '../models/Categorias.js';
const obtenerPosts = async (req,res)=>{

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

    const{idpost}=req.params

    const obtenerPostID = await Post.findOne({ where:{idpost}, include:
        [{model: Categorias}]});
        if(obtenerPostID){

            res.json({obtenerPostID});
        }else{
            res.status(404).json({message:`El  post con el id ${idpost} no ha sido encontrado`})
        }

    

}
const crearPost = async (req,res)=>{

    const{titulo,imagen,fecha_creacion,contenido,fk_idcategoria}=req.body

    const crearPost = await Post.create({
        titulo,
        imagen,
        fecha_creacion,
        contenido,
        fk_idcategoria
    });
        
            res.json({crearPost})
       

    

}
const actualizarPost = async (req,res)=>{
    const{idpost}=req.params
    const{titulo,imagen,fecha_creacion,contenido,fk_idcategoria}=req.body

    const actualizarPost = await Post.update({
        titulo,
        imagen,
        fecha_creacion,
        contenido,
        fk_idcategoria
         }
        ,{ where:
            {
                idpost
            }});
            
            res.json({message: ` Post ${titulo} actualizado con exito`})
       

    

}
export{
    obtenerPosts,
    obtenerPostID,
    crearPost,
    actualizarPost
}