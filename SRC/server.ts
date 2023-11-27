import express from 'express';
import rotaUsuario from './rotas/rotaUsuario';
import rotaLance from './rotas/rotaLance';
import rotaLeilao from './rotas/rotaLeilao';

const app = express();
app.use(express.json());

app.use(rotaUsuario);
app.use(rotaLance);
app.use(rotaLeilao);

app.listen(3000, function(){
    console.log("Server running on port 3000");
})