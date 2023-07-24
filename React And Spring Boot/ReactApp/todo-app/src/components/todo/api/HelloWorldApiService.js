import axios from "axios";
// export function retrieveHelloWorldHandlerBean(){
//     return axios.get('http://localhost:8080/hello-world-bean');
// }

const apiClient = axios.create(
    {
        baseURL:'http://localhost:8080'
    }
);


export const retrieveHelloWorldHandlerBean=() => apiClient.get('/hello-world-bean');
export const retrieveHelloWorldHandlerPathVariable=(username) => apiClient.get(`/hello-world/path-variable/${username}`);