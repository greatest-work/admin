import request from '@/utils/request';

export default {
    userLogin(data) {
        return request.post(`/user/login`, data)
    },
    getUserList(data) {
        return request.get(`/user/list`, data)
    }
}