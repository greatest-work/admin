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

export const rules = () => {
    return {
        title: [
            {
                required: true,
                message:'标题必填'
            },
            {
                minLength: 5,
                message:'标题长度不能少于 5 个字符'
            },
            {
                maxLength: 100,
                message:'标题长度不能多于 100 个字符'
            }
        ],
        siteId: [
            {
                required: true,
                message:'发布站点必填'
            },
        ],
        content: [
            {
                required: true,
                message:'内容站点必填'
            },
            {
                minLength: 20,
                message:'内容长度不能少于 20 个字符'
            },
            {
                maxLength: 20000,
                message:'内容长度不能多于 20k 个字符'
            }
        ],
        tags: [
            {
                required: true,
                message:'至少选择一个标签'
            }
        ],
        userId: [
            {
                required: true,
                message:'请选择作者'
            }
        ],
    }
}

export const fileName = () => {
    return {
        siteList: {
            value: 'id', 
            label: 'name'
        },
        userList: {
            value: 'id', 
            label: 'username'
        },
    }
}