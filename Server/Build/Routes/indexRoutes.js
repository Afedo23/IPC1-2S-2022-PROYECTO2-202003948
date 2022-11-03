"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/nombreCarnet', (req, res) => res.send('Carlos Alfredo, Barrientos López -- 202003948 '));
    }
}
const indexRouter = new IndexRouter();
exports.default = indexRouter.router;
