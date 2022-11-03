"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./Routes/indexRoutes"));
const indexJugador_1 = __importDefault(require("./Routes/indexJugador"));
const indexUsuarios_1 = __importDefault(require("./Routes/indexUsuarios"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('develop'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/jugadores', indexJugador_1.default);
        this.app.use('/usuarios', indexUsuarios_1.default);
    }
    star() {
        this.app.listen(this.app.get('port'), () => {
            console.log('el server esta en el puerto ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.star();
