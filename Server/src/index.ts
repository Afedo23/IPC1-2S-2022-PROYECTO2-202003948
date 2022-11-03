import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './Routes/indexRoutes';
import indexJugador from './Routes/indexJugador';
import indexUsuarios from './Routes/indexUsuarios';

class Server {
    public app: Application;

    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('develop'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void{
        this.app.use('/',indexRoutes);
        this.app.use('/jugadores',indexJugador);
        this.app.use('/usuarios',indexUsuarios);
    }

    star(): void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('el server esta en el puerto ',this.app.get('port'))
        });
    }


}

const server = new Server();
server.star();