import * as Repository from '../repositories/repositoryEmpresa.js'

export let qualquerFuncao = async():Promise<any> =>{
    return "teste"
}

export let create = async(body:any):Promise<any> =>{
    let vaga = await Repository.create(body)
    return vaga
}

export let findAll = async():Promise<any> =>{
    let vagas = await Repository.findAll()
    return vagas
}

export let deletar = async(id:any):Promise<any> =>{
    let vaga = await Repository.deletar(id)
    return vaga
}

export let put = async(id:any):Promise<any> =>{
    let vaga = await Repository.put(id)
    return vaga
}

