import { pool } from "../config/config.js"

export async function create(body:any){
    return pool.query(`INSERT INTO public.tb_candidatos( nome, sobrenome, cpf, fg_ativo, dt_aniversario) VALUES ('${body.nome}', '${body.sobrenome}', '${body.cpf}', ${body.fg_ativo}, '${body.dt_aniversario}')`)
}

export function findAll() {
    return pool.query("SELECT * FROM tb_candidatos")
}

export function deletar(id: number) {
    return {}
}

export function put(id: any) {
    return {}
}



