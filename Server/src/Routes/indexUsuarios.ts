import { Router } from 'express';

const todosUsuarios = [
    {
        usuario: "IPC1B",
        password: "Prueba123"

    },
    {
        usuario: "IPC1F",
        password: "Prueba456"
    },   
    {
        usuario: "IPC1202003948",
        password: "Prueba789"
    }

]
class IndexUsuario{
    public router : Router = Router();

    constructor(){
        this.config();

    }

    config(): void{
        this.router.get('/todos', (req, res) => {
            res.send(todosUsuarios);
        });

        this.router.get('/usuario/:usuario',(req,res)=>{
            const usuarios = this.obtenerUsuarioPorNombre(req.params.usuario);
            res.send(usuarios);
        });
    }

    obtenerUsuarioPorNombre(nombreUsuario: any): any{
        let tempo = [];
        for(const usuarios of todosUsuarios){
            if (usuarios.usuario == nombreUsuario){
                tempo.push(usuarios);
            }
        }
        return tempo;
    }
}

const indexUsuario = new IndexUsuario();
export default indexUsuario.router;