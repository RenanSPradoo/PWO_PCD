import * as Repository from '../repositories/repositoryCandidato.js'

export let qualquerFuncao = async():Promise<any> =>{
    return "teste"
}

export let create = async(body:any):Promise<any> =>{
    let candidato = await Repository.create(body)
    return candidato
}

export let findAll = async():Promise<any> =>{
    let candidatos = await Repository.findAll()
    return candidatos
}

export let deletar = async(id:any):Promise<any> =>{
    let candidato = await Repository.deletar(id)
    return candidato
}

export let put = async(id:any):Promise<any> =>{
    let candidato = await Repository.put(id)
    return candidato
}

