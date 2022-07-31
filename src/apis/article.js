import request from '@/utils/request';
import qs from 'qs';

export default {
    getArticlesList(prarms) {
        return request.get(`/articles?${qs.stringify(prarms)}`)
    }
}