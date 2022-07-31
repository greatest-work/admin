import request from '@/utils/request';

export default {
    getArticlesList(params) {
        return request.get(`/articles`, { params })
    }
}