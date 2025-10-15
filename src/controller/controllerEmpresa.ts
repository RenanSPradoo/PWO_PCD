import * as Repository from '../repositories/repositoryEmpresa.js'

export let qualquerFuncao = async():Promise<any> =>{
    return "teste"
}

export let create = async(body:any):Promise<any> =>{
    let empresa = await Repository.create(body)
    return empresa
}

export let findAll = async():Promise<any> =>{
    let empresas = await Repository.findAll()
    return empresas
}

export let deletar = async(id:any):Promise<any> =>{
    let empresa = await Repository.deletar(id)
    return empresa
}

export let put = async(id:any):Promise<any> =>{
    let empresa = await Repository.put(id)
    return empresa
}

