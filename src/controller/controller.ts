import * as Repository from '../repositories/repository.js'

export let qualquerFuncao = async():Promise<any> =>{
    return "teste"
}

export let createAcessibilidade = async(body:any):Promise<any> =>{
    let acessibilidade = await Repository.createAcessibilidade(body)
    return acessibilidade
}

export let createBarreira = async(body:any):Promise<any> =>{
    let barreira = await Repository.createBarreira(body)
    return barreira
}

export let createSubtipo = async(body:any):Promise<any> =>{
    let subtipo = await Repository.createSubtipo(body)
    return subtipo
}
