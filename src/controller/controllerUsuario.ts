import * as Repository from '../repositories/repository.js'

export let qualquerFuncao = async():Promise<any> =>{
    return "teste"
}

export let create = async(body:any):Promise<any> =>{
    let usuario = await Repository.create(body)
    return usuario
}







