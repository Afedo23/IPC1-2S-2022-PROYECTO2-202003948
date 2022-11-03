import { Router } from 'express';

const todosJugadores = [
    {
        id: 1,
        nombre: "Lionel",
        apellido: "Messi",
        seleccion: "Argentina",
        region: "CONMEBOL",
        imagen: "https://cdn.sofifa.net/players/158/023/23_120.png"
    },
    {
        id: 2,
        nombre: "Ángel",
        apellido: "Di María",
        seleccion: "Argentina",
        region: "CONMEBOL",
        imagen: "https://cdn.sofifa.net/players/183/898/23_120.png"
    },
    {
        id: 3,
        nombre: "Paulo",
        apellido: "Dybala",
        seleccion: "Argentina",
        region: "CONMEBOL",
        imagen: "https://cdn.sofifa.net/players/211/110/23_120.png"
    },
    {
        id: 4,
        nombre: "Rodrigo",
        apellido: "De Paul",
        seleccion: "Argentina",
        region: "CONMEBOL",
        imagen: "https://cdn.sofifa.net/players/212/616/23_120.png"
    },
    {
        id: 5,
        nombre: "Damián",
        apellido: "Martínez",
        seleccion: "Argentina",
        region: "CONMEBOL",
        imagen: "https://cdn.sofifa.net/players/202/811/23_120.png"
    },
    {
        id: 6,
        nombre: "Ederson",
        apellido: "Santana",
        seleccion: "Brazil",
        region: "CONMEBOL",
        imagen: "https://cdn.sofifa.net/players/210/257/23_120.png"
    },
    {
        id: 7,
        nombre: "Neymar",
        apellido: "Santos",
        seleccion: "Brazil",
        region: "CONMEBOL",
        imagen: "https://cdn.sofifa.net/players/190/871/23_120.png"
    },
    {
        id: 8,
        nombre: "Raphael",
        apellido: "Dias",
        seleccion: "Brazil",
        region: "CONMEBOL",
        imagen: "https://cdn.sofifa.net/players/233/419/23_120.png"
    },
    {
        id: 9,
        nombre: "Philippe",
        apellido: "Coutinho",
        seleccion: "Brazil",
        region: "CONMEBOL",
        imagen: "https://cdn.sofifa.net/players/189/242/23_120.png"
    },
    {
        id: 10,
        nombre: "Gabriel",
        apellido: "De Jesus",
        seleccion: "Brazil",
        region: "CONMEBOL",
        imagen: "https://cdn.sofifa.net/players/230/666/23_120.png"
    },
    {
        id: 11,
        nombre: "Nicholas",
        apellido: "Hagen",
        seleccion: "Guatemala",
        region: "CONCACAF",
        imagen: "https://cdn.sofifa.net/players/267/684/23_120.png"
    },
    {
        id: 12,
        nombre: "José",
        apellido: "Ardón",
        seleccion: "Guatemala",
        region: "CONCACAF",
        imagen: "https://antiguagfc.com/wp-content/uploads/2019/10/10-500x500.jpg"
    },
    {
        id: 13,
        nombre: "Rodrigo",
        apellido: "Saravia",
        seleccion: "Guatemala",
        region: "CONCACAF",
        imagen: "https://tmssl.akamaized.net/images/portrait/originals/417389-1464127084.jpg"
    },
    {
        id: 14,
        nombre: "Óscar",
        apellido: "Santis",
        seleccion: "Guatemala",
        region: "CONCACAF",
        imagen: "https://th.bing.com/th/id/OIP.jSBb1pwKV7GxZPcJhEqqegHaGN?pid=ImgDet&rs=1"
    },
    {
        id: 15,
        nombre: "José",
        apellido: "Pinto",
        seleccion: "Guatemala",
        region: "CONCACAF",
        imagen: "https://futbolchapinenvivo.com/wp-content/uploads/1993/06/Jos%C3%A9-Carlos-Pinto-1.png"
    },
    {
        id: 16,
        nombre: "Pablo",
        apellido: "Gavira",
        seleccion: "España",
        region: "UEFA",
        imagen: "https://cdn.sofifa.net/players/264/240/23_120.png"
    },
    {
        id: 17,
        nombre: "Pedro",
        apellido: "González",
        seleccion: "España",
        region: "UEFA",
        imagen: "https://www.barcelonafc.dk/spillere/Pedri.png"
    },
    {
        id: 18,
        nombre: "Marco",
        apellido: "Asensio",
        seleccion: "España",
        region: "UEFA",
        imagen: "https://cdn.sofifa.net/players/220/834/23_120.png"
    },
    {
        id: 19,
        nombre: "Anssumane",
        apellido: "Fati",
        seleccion: "España",
        region: "UEFA",
        imagen: "https://cdn.sofifa.net/players/253/004/23_120.png"
    },
    {
        id: 20,
        nombre: "Gerard",
        apellido: "Moreno",
        seleccion: "España",
        region: "UEFA",
        imagen: "https://cdn.sofifa.net/players/208/093/23_120.png"
    }
]

class IndexJugador{
    public router : Router = Router();

    constructor(){
        this.config();

    }

    config(): void{
        this.router.get('/hola', (req, res) => res.send("Hola Mundo"));

        this.router.get('/todos', (req, res) => {
            res.send(todosJugadores);
        });

        this.router.get('/nombre/:nombre', (req, res) => {
            //console.log(req.params.nombre);
            const jugador = this.obtenerJugadorPorNombre(req.params.nombre);
            res.send(jugador);
        });

        this.router.get('/seleccion/:nombre', (req, res) => {
            //console.log(req.params.nombre);
            const jugador = this.obtenerSeleccionPorNombre(req.params.nombre);
            res.send(jugador);
        });

        this.router.get('/region/:nombre', (req, res) => {
            //console.log(req.params.nombre);
            const jugador = this.obtenerRegionPorNombre(req.params.nombre);
            res.send(jugador);
        });
    }

    obtenerJugadorPorNombre(nombreJugador: any): any {
        return todosJugadores.find(dato => dato.nombre == nombreJugador);
    }

    obtenerSeleccionPorNombre(nombreSeleccion: any): any {
        let tempo = [];
        for (const jugador of todosJugadores) {
            if (jugador.seleccion == nombreSeleccion) {
                tempo.push(jugador);
            }
        }
        return tempo;
    }

    obtenerRegionPorNombre(nombreRegion: any): any {
        let tempo = [];
        for (const jugador of todosJugadores) {
            if (jugador.region == nombreRegion) {
                tempo.push(jugador);
            }
        }
        return tempo;
    }
}

const indexJugador = new IndexJugador();
export default indexJugador.router;