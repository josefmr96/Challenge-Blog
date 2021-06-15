import express from "express";
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

//conectar db
db.authenticate()
    .then(()=> console.log('Base de datos conectada'))
    .catch(error=> console.log(error));


const port = process.env.PORT ||  4000;

// body parser
app.use(express.urlencoded({extended:true}));

app.use('/', router);


app.listen(()=>{
    console.log(`El servidor  funciona en el puerto ${port}`)
});