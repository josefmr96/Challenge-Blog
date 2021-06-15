import Sequelize from 'sequelize';
import db from '../config/db.js';
import {Categorias} from '../models/Categorias.js';

export const Post = db.define('posts',{
    idpost:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    titulo:{
        type: Sequelize.TEXT,

    },
    contenido:{
        type: Sequelize.TEXT,

    }, 
    imagen:{
        type: Sequelize.TEXT,

    }, 
    fecha_creacion:{
        type: Sequelize.DATE,

    },
    fk_idcategoria:{
        type: Sequelize.INTEGER,

    },

});
Categorias.belongsTo(Post, { foreignKey: 'idcategoria',  });
Post.belongsTo(Categorias, { foreignKey: 'fk_idcategoria',  });