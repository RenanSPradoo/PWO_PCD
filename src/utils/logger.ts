//importação de depencias em nosso projeto
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import * as Routes from "../routes/routes.js";
import * as Controller from "../controller/controller.js";
import * as ControllerCandidato from "../controller/controllerCandidato.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

export let conectServ = (PORT:number) => {

    app.listen(PORT, () => {
        //.listem representa em qual porta virtual, o servidor será aberto
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    });

    app.post(Routes.create_usuario, async (req, res) =>{
        let body = req.body 
        let retorno = await Controller.createUser(body)

    res.status(200).send('Http, Feito com sucesso!')
    })
    
    app.post(Routes.post_create_candidato, async (req, res) => {
        let body = req.body
        let retorno = await ControllerCandidato.create(body)

        res.status(200).send(retorno)
    })
};
