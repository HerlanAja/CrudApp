import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/',
});

export const getItems = () => api.get('/');
export const createItem = (item: { name: string; description: string; price: number }) => api.post('/', item);
export const updateItem = (id: number, item: { name: string; description: string; price: number }) => api.put(`/${id}`, item);
export const deleteItem = (id: number) => api.delete(`/${id}`);