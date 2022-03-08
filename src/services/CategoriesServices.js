import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://spotart.local/wp-json/wp/v2',
    headers:  {
        Accept: 'application/json',
        'content-Type': 'application/json',
    },
    timeout: 5000
});

export default {
    findAll() {
        return apiClient.get('/category?_embed');
    },

    find(id) {
        return apiClient.get(`/category/${id}?_embed`);
    },
}