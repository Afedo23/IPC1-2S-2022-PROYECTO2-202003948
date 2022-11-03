"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
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
];
class IndexUsuario {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/todos', (req, res) => {
            res.send(todosUsuarios);
        });
        this.router.get('/usuario/:usuario', (req, res) => {
            const usuarios = this.obtenerUsuarioPorNombre(req.params.usuario);
            res.send(usuarios);
        });
    }
    obtenerUsuarioPorNombre(nombreUsuario) {
        let tempo = [];
        for (const usuarios of todosUsuarios) {
            if (usuarios.usuario == nombreUsuario) {
                tempo.push(usuarios);
            }
        }
        return tempo;
    }
}
const indexUsuario = new IndexUsuario();
exports.default = indexUsuario.router;
