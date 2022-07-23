import request from '@/utils/request';

export default {
    getSiteList() {
        return request.get(`/site/list`)
    }
}