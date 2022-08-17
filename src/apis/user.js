import request from '@/utils/request';

export default {
    userLogin(data) {
        return request.post(`/user/login`, data)
    }
}