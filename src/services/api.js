import axios from "axios";

const api = axios.create({
    baseURL: "https://us-central1-prova-front-letras.cloudfunctions.net/"
});

export default api;