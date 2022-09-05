import request from '@/utils/request';

export default {
    getFriendshipList(params) {
        return request.get(`/friendship/list`, { params })
    },
    addFriendship(data) {
        return request.post(`/friendship/add`, data)
    },
}
