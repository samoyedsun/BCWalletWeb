import axios from 'axios'
import router from '../router'

// axios.defaults.withCredentials = true;

var api = axios.create({
    timeout: 5000,
    Headers: {'Content-Type': 'application/json'},
    // Headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    withCredentials: true
})

api.interceptors.request.use(request => {
    return request
}, error => {
    return Promise.reject(error)
})

api.interceptors.response.use(response => {
    // config.headers['token'] = '01234567890';
    return response
}, error => {
    if (error && error.response) {
        switch (error.response.status) {
        case 400:
            error.message = '错误请求!'
            break
        case 401:
            error.message = '未授权，请重新登陆!'
            router.push({ path: '/login' })
            break
        default:
            error.message = `连接错误${error.response.status}`
        }
    }
    return Promise.reject(error.response.data)
})

export default api
