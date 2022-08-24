import t from '@/const/fieldName';
export const columns = [
    {
        title: t.siteName,
        dataIndex: "name",
        slotName: "siteInfo",
        ellipsis: true,
    },
    {
        title: t.siteStatus,
        dataIndex: "status",
        slotName: "status",
        ellipsis: true,
        width: 180,
        align: 'center'
    },
    {
        title: t.siteLink,
        dataIndex: "siteLink",
        slotName: "siteLink",
        width: 180,
        ellipsis: true
    },
    {
        title: t.articleTotal,
        dataIndex: "articleTotal",
        tooltip: true,
        align: 'center',
        width: 120,
        ellipsis: true
    },
    {
        title: t.createTime,
        dataIndex: "createTime",
        tooltip: true,
        ellipsis: true,
    },
    {
        title: t.updateTime,
        dataIndex: "updateTime",
        tooltip: true,
        ellipsis: true
    },
    {
        title: t.optional,
        width: 240,
        slotName: 'optional',
        align: 'center'
    }
];

export const baseInfoConf = [
    {
        key: 'logo',
        type: 'img',
        label: t.siteLogo
    },
    {
        key: 'name',
        type: 'text',
        label: t.siteName
    },
    {
        key: 'articleTotal',
        type: 'text',
        label: t.articleTotal
    },
    {
        key: 'status',
        type: 'badge',
        label: t.siteStatus
    },
    {
        key: 'siteLink',
        type: 'link',
        label: t.siteLink
    },
    {
        key: 'path',
        type: 'text',
        label: t.sitePath
    },
    {
        key: 'id',
        type: 'text',
        label: t.siteId
    },
    {
        key: 'createTime',
        type: 'time',
        label: t.createTime
    },
    {
        key: 'updateTime',
        type: 'time',
        label: t.updateTime
    },
]

export const friendshipColumns = () => {
    return [
        {
            title: t.friendshipName,
            dataIndex: "name",
            tooltip: true,
            ellipsis: true,
        },
        {
            title: t.friendshipLogo,
            slotName: "logo",
            ellipsis: true,
        },
        {
            title: t.friendshipStatus,
            slotName: "status",
            ellipsis: true,
        },
        {
            title: t.friendshipLink,
            dataIndex: "link",
            ellipsis: true,
        },
        {
            title: t.friendshipDescText,
            dataIndex: "descText",
            tooltip: true,
            ellipsis: true,
        },
        {
            title: t.optional,
            align: 'center',
            slotName: "optional",
        },
    ]
}