import request from '@/utils/request';
const getSiteList = () => {
    return request.get(`/articles`)
}

export default {
    getSiteList
}
// TODO class