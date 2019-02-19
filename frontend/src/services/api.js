import axios from 'axios'
//Conexão com a API.
const api = axios.create({
    baseURL: "http://localhost:8080"
});

export default api 