import axios from "axios";

const api = axios.create({
    baseURL: 'https://6a3bd259e4a07f202e15eee6.mockapi.io/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api