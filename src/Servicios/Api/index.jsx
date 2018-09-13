const URL = 'http://red.lindley.pe/AmigoApi/api/CargaParametro/Listar'
//const URL = 'http://10.145.220.77/FuerzaVentaAPI/api/Centro/Listar/3'

export default () => {
    return fetch(URL)
        .then(Response => Promise.all([Response, Response.json()]))
}