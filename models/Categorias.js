import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Categorias = db.define('categorias',{
    
    idcategoria:{
     type: Sequelize.INTEGER,
    primaryKey: true
    },

    categorias:{
        type: Sequelize.TEXT
    }
});