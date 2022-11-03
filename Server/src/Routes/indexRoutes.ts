import { Router } from "express";

class IndexRouter{
    public router: Router= Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/nombreCarnet',(req,res)=>res.send('Carlos Alfredo, Barrientos López -- 202003948 '))
    }
}

const indexRouter = new IndexRouter();
export default indexRouter.router;