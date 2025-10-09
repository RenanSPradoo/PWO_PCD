import express from "express";
import cors from "cors"


const APP = express();
APP.use(express.json());
APP.use(cors());


export let conectServ = (PORT: number) => {
  APP.listen(PORT, () => {
    console.log(`Servidor iniciado e escutando na porta ${PORT}`);
  });
}
