export const columns = [
    {
        title: "标题",
        dataIndex: "title",
        ellipsis: true,
        tooltip: true,
    },
    {
        title: "是否发布",
        width: 100,
        align: 'center',
        slotName: 'status',
    },
    {
        title: "标签",
        slotName: 'tag', 
    },
    {
        title: "所属站点",
        dataIndex: "siteInfo.name",
    },
    {
        title: "创建时间",
        dataIndex: "createTime",
        ellipsis: true,
        tooltip: true,
    },
    {
        title: "更新时间",
        dataIndex: "updateTime",
        ellipsis: true,
        tooltip: true,
    },
    {
        title: '操作',
        slotName: 'optional',
        align: 'center'
    }
];