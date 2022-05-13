import axios from "axios";

const api = axios.create({//servicodados.ibge.gov.br/api/v1/localidades/estados/GO/distritos
    baseURL:'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'
})

export default api;