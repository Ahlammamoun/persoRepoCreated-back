import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://spotart.local/wp-json/wp/v2',
    headers:  {
        Accept: 'application/json',
        'content-Type': 'application/json',
    },
    timeout: 10000
});

export default {
    findAll() {
        return apiClient.get('/artists?_embed');
    },
    find(id) {
        return apiClient.get(`/artists/${id}?_embed`);
    },
}