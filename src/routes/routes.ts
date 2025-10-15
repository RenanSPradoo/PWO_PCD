//Rotas usuario/login
export let create_usuario:string = '/criarUsuario'
export let create_usuario_Empresa:string = '/criarUsuarioEmpresa'

//Rotas para o Candidato
export let post_create_candidato:string = '/post/criarCandidato'
export let get_create_candidatos:string = '/get/criarCandidato'
export let delete_create_candidatos:string = '/delete/candidato/:id'
export let put_create_candidato:string = '/update/candidade/:id'

//Rotas para empresa
export let post_create_empresa: string = "/post/empresa"
export let get_create_empresa: string = "/get/empresa"
export let delete_create_empresa: string = "/delete/empresa/:id"
export let put_create_empresa: string = "/update/empresa/:id"

//Rotas de acessibilidade
export let post_create_acessibilidade: string = "/post/acessibilidade"
export let post_create_barreira: string = "/post/barreira"
export let post_create_subtipo: string = "/post/subtipo"

//Rotas para o recurso vaga
export let post_create_vaga: string = "/post/vaga/:id"
export let candidatar_create_vaga: string = "/post/cadidato/vaga/:id"
export let get_create_vagas: string = "/get/vaga"
export let put_create_vaga: string = "/update/vaga/:id"
export let delete_create_vaga: string = "/delete/vaga/:id"