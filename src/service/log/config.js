export const getLogType = () => {
    return {
        login: '登录',
        build: '构建'
    }
}

export const getLogStatus = () => {
    return {
        '200': '操作成功',
    }
}

export const columns = [
    {
        title: "时间",
        dataIndex: "time",
        ellipsis: true,
        tooltip: true,
    },
    {
        title: "类型",
        dataIndex: "type",
        width: 100,
        align: 'center'
    },
    {
        title: "IP",
        dataIndex: "ip",
    },
    {
        title: "操作人",
        dataIndex: "userId",
    }
];