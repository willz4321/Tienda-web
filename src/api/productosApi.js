import axios from "axios";

export const productosApi = axios.create({
    baseURL: 'http://localhost:8080/api/productos'
});