import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data)
}

const create = () =>{
    return axios.create(baseUrl, newObject).then(response => response.data)
}

const update = (id, newObject) =>{
    return axios.put(`${baseUrl}/{id}`, newObject).then(response => response.data)
}

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`).then(response => response.data)
}

export default {
    getAll, create, update, remove
}