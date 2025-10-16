import { pool } from "../config/config.js";

export async function create(body: any) {
  return {};
}
export function createAcessibilidade(body: any) {
  const res = pool.query(`INSERT INTO public.tb_acessibilidades(nm_acessibilidade) VALUES ('${body.nm_acessibilidade}')`)
  return  res;
}

export function createBarreira(body: any) {
  return {};
}

export function createSubtipo(body: any) {
  return {};
}
