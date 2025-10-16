//importação de depencias em nosso projeto
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import * as Routes from "../routes/routes.js";
import * as Controller from "../controller/controller.js";
import * as ControllerCandidato from "../controller/controllerCandidato.js";
import * as ControllerEmpresa from "../controller/controllerEmpresa.js";
import * as ControllerUsuario from "../controller/controllerUsuario.js";
import * as ControllerVaga from "../controller/controllerVaga.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

//Rotas usuario/login
export let conectServ = (PORT: number) => {
  app.listen(PORT, () => {
    //.listem representa em qual porta virtual, o servidor será aberto
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });

  app.post(Routes.create_usuario, async (req, res) => {
    let body = req.body;
    let retorno = await ControllerUsuario.create(body);

    res.status(200).send("Http, Feito com sucesso!");
  });

  // Rotas Candidato
  app.post(Routes.post_create_candidato, async (req, res) => {
    let body = req.body;
    let retorno = await ControllerCandidato.create(body);

    res.status(200).send(retorno);
  });

  app.get(Routes.get_create_candidatos, async (req, res) => {
    let retorno = await ControllerCandidato.findAll();

    res.status(200).send(retorno);
  });

  app.delete(Routes.delete_create_candidatos, async (req, res) => {
    let { id } = req.params;
    let retorno = await ControllerCandidato.deletar(id);

    res.status(200).send(retorno);
  });

  app.put(Routes.put_create_candidato, async (req, res) => {
    let { id } = req.params;
    let retorno = await ControllerCandidato.put(id);

    res.status(200).send(retorno);
  });

  //Rotas Empresa
  app.post(Routes.post_create_empresa, async (req, res) => {
    let body = req.body;
    let retorno = await ControllerEmpresa.create(body);

    res.status(200).send(retorno);
  });

  app.get(Routes.get_create_empresa, async (req, res) => {
    let retorno = await ControllerEmpresa.findAll();

    res.status(200).send(retorno);
  });

  app.delete(Routes.delete_create_empresa, async (req, res) => {
    let { id } = req.params;
    let retorno = await ControllerEmpresa.deletar(id);

    res.status(200).send(retorno);
  });

  app.put(Routes.put_create_empresa, async (req, res) => {
    let { id } = req.params;
    let retorno = await ControllerEmpresa.put(id);

    res.status(200).send(retorno);
  });

  // Rotas Acessibilidade
  app.post(Routes.post_create_acessibilidade, async (req, res) => {
    let body = req.body;
    let retorno = await Controller.createAcessibilidade(body);

    res.status(200).send(retorno);
  });

  app.post(Routes.post_create_barreira, async (req, res) => {
    let body = req.body;
    let retorno = await Controller.createBarreira(body);

    res.status(200).send(retorno);
  });

  app.post(Routes.post_create_subtipo, async (req, res) => {
    let body = req.body;
    let retorno = await Controller.createSubtipo(body);

    res.status(200).send(retorno);
  });





 // Vaga
  app.post(Routes.post_create_vaga, async (req, res) => {
    let body = req.body;
    let retorno = await ControllerVaga.create(body);

    res.status(200).send(retorno);
  });

  app.get(Routes.get_create_vagas, async (req, res) => {
    let retorno = await ControllerVaga.findAll();

    res.status(200).send(retorno);
  });

  app.delete(Routes.delete_create_vaga, async (req, res) => {
    let { id } = req.params;
    let retorno = await ControllerVaga.deletar(id);

    res.status(200).send(retorno);
  });

  app.put(Routes.put_create_vaga, async (req, res) => {
    let { id } = req.params;
    let retorno = await ControllerVaga.put(id);

    res.status(200).send(retorno);
  });
};
