import request from '@/utils/request';

export default {
    getArticlesList(params) {
        return request.get(`/article/list`, { params })
    },
    updateArticles(data) {
        return request.post(`/article/update`, data)
    },
}