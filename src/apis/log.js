import request from '@/utils/request';

export default {
    getLogList(params = {}) {
        return request.get(`/log/list`, { params })
    }
}