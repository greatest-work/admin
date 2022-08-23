export const rules = () => {
    return {
        sendMail: [
            {
                type: 'email',
                message: '邮箱格式不正确'
            },
            {
                required: true,
                message: '发送者是必填的'
            }
        ],
        mailPassCode: [
            {
                required: true,
                message: '授权码是必填的'
            }
        ],
        adminMail: [
            {
                type: 'email',
                message: '邮箱格式不正确'
            },
        ]
    }
}