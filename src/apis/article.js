import request from '@/utils/request';

export default {
    getArticlesList() {
        return request.get(`/articles`)
    }
}