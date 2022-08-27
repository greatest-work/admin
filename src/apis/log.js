import request from '@/utils/request';

export default {
    getLogList(params = {}) {
        return request.get(`/log/list`, { params })
    },
    getBuildLogList(siteId, params = {}) {
        return request.get(`/log/build/${siteId}/list`, { params })
    },
    getBuildLogInfo(buildId) {
        return request.get(`/log/build/${buildId}/info`)
    }
}