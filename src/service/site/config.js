export const columns = [
    {
        title: "站点名称",
        dataIndex: "name",
        slotName: "siteInfo",
        ellipsis: true,
    },
    {
        title: "站点地址",
        dataIndex: "siteLink",
        slotName: "siteLink",
        ellipsis: true
    },
    {
        title: "文章数量（篇）",
        dataIndex: "articleTotal",
        tooltip: true,
        align: 'center',
        ellipsis: true
    },
    {
        title: "状态",
        dataIndex: "status",
        slotName: "status",
        ellipsis: true,
        align: 'center'
    },
    {
        title: "创建时间",
        dataIndex: "createTime",
        tooltip: true,
        ellipsis: true,
    },
    {
        title: "更新时间",
        dataIndex: "updateTime",
        tooltip: true,
        ellipsis: true
    },
    {
        title: '操作',
        width: 240,
        slotName: 'optional',
        align: 'center'
    }
];