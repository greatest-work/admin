const ARTICLE_STATUS = () => {
    return [ 
        {
            label: '未发布',
            value: 0,
            status: 'processing'
        },
        {
            label: '已发布',
            value: 1,
            status: 'success'
        },
        {
            label: '发布中',
            value: 2,
            status: 'warning'
        }
    ]
}

const SITE_STATUS = () => {
    return [ 
        {
            label: '初始化完成',
            value: 0,
            status: 'processing'
        },
        {
            label: '正常运行中',
            value: 1,
            status: 'success'
        },
        {
            label: '编译中',
            value: 2,
            status: 'warning'
        }
    ]
}

const FRIENDSHIP_STATUS = () => {
    return [ 
        {
            label: '未上线',
            value: 0,
            status: 'processing'
        },
        {
            label: '正常运行',
            value: 1,
            status: 'success'
        },
        {
            label: '已下线',
            value: 2,
            status: 'warning'
        }
    ]
}

const getSiteStatus = val => {
    return SITE_STATUS().find(item => item.value === val)
}

const getArticleStatus = val => {
    return ARTICLE_STATUS().find(item => item.value === val)
}

const getFriendshipStatus = val => {
    return FRIENDSHIP_STATUS().find(item => item.value === val)
}

export { ARTICLE_STATUS, getArticleStatus, getSiteStatus, SITE_STATUS, getFriendshipStatus }
