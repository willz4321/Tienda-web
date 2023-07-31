import axios from "axios";

export const compraApi = axios.create({
    baseURL: 'http://localhost:8080/api/compras'
});