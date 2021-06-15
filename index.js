import express from 'express';
import router from './routes/index.js'
import db from './config/db.js'


const app = express();

//conectar db
db.authenticate()
    .then(()=> console.log('Base de datos conectada'))
    .catch(error=> console.log(error));

const port = process.env.PORT || 4000;

//agregar body parser
app.use(express.urlencoded({extended:true}));

app.use('/', router);


app.listen(port,()=>{
    console.log(`El servido esta funcionando en el puerto ${port}`)
});