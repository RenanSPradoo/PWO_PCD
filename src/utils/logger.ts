//importação de depencias em nosso projeto
import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());

//declarando rotas no express
app.get("/get", (Request, Response) => {
  //.get repesenta 'Read' no conceito do CRUD
  // PARAMETROS DA FUNÇÃO
  //'/get' é o caminho da URL que representa essa requisição
  //Request e responde são os modelos de comunicação entre Cliente e Servidor
});

app.post("/post", (Request, Response) => {
  //.post representa 'Create' no conceito do CRUD
  //PARAMETROS DA FUNCAO
  //'/post' é o caminho da URL que representa esse requisição
  //Request e Responde são os modelos de comunicação entre Cliente e Servidor
});

app.put("/put", (Request, Response) => {
  //.post representa 'Update' no conceito do CRUD
  //PARAMETROS DA FUNCAO
  //'/put' é o caminho da URL que representa essa requisição
  //Request e Response são os modelos da comunicação entre CLiente e Servidor
});

app.delete("/delete", (Request, Response) => {
  //.post representa 'delete' no conceito do CRUD
  //PARAMETROS DA FUNCAO
  //'/delete' é o caminho da URL que representa essa requisição
  //Request e Response são os modelos da comunicação entre CLiente e Servidor
});

const PORT = process.env.PORT; 

app.listen(PORT, () => {
  //.listem representa em qual porta virtual, o servidor será aberto
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

