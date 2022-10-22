
export const rules = () => {
    return {
        name: [
            {
                required: true,
                message:'友链名称必填'
            },
            {
                minLength: 1,
                message:'友链名称长度不能少于 1 个字符'
            },
            {
                maxLength: 10,
                message:'友链名称长度不能多于 10 个字符'
            }
        ],
        link: [
            {
                required: true,
                message:'友链地址必填'
            },
            { 
                type: 'url',
                message:'友链地址必须为 URL 格式'
            }
        ],
        logo: [
            {
                required: true,
                message:'Logo必填'
            },
            { 
                type: 'url',
                message:'Logo 必须为 URL 格式'
            }
        ],
        descText: [
            {
                required: true,
                message:'描述信息必填'
            }
        ]
    }
}
