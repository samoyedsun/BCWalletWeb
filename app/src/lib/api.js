import axios from 'axios'

// axios.defaults.withCredentials = true;

var api = axios.create({
    timeout: 5000,
    Headers: {'Content-Type': 'application/json'},
    // Headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    withCredentials: true
})

api.interceptors.request.use(config => {
    // config.headers['token'] = '01234567890';
    return config
})

api.interceptors.response.use(data => {
    return data
})

export default api
