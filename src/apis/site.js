import request from '@/utils/request';

export default {
    getSiteList(params = {}) {
        return request.get(`/site/list`, { params })
    },
    addSite(data) {
        return request.post(`/site/add`, data)
    },
    buildSite(siteId) {
        return request.post(`/reset_build/${siteId}`)
    },
    deleteSite(siteId) {
        return request.delete(`/site/delete/${siteId}`)
    },
    getSiteInfo(siteId) {
        return request.get(`/site/info/${siteId}`)
    },
    updateSite(data) {
        return request.put(`/site/update`, data)
    }
}