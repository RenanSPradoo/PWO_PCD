import * as Repository from '../repositories/repository.js'

export let qualquerFuncao = async():Promise<any> =>{
    return "teste"
}

export let createUser = async(body:any):Promise<any> =>{
    let usuario = await Repository.create(body)
    return usuario
}





