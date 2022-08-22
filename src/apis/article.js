import request from '@/utils/request';

export default {
    getArticlesList(params) {
        return request.get(`/article/list`, { params })
    },
    updateArticles(data) {
        return request.put(`/article/update`, data)
    },
    addArticle(data) {
        return request.post(`/article/add`, data)
    },
    delArticle(id) {
        return request.delete(`/article/delete/${id}`)
    },
    getArticleInfo(id) {
        return request.get(`/article/info/${id}`)
    },
}