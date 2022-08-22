import request from '@/utils/request';

export default {
    getSystemList() {
        return request.get(`/system/list`, {  })
    }
}