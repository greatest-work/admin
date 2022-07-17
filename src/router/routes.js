/**
 * 站点
 */
const SiteDetails = () => import('@/views/site/details');
const SiteList = () => import('@/views/site/list');

/**
 * 
 */
const Dashboard = () => import('@/views/dashboard');


const routes = [
    {
        path: '/login',
        meta: {
            hidden: true,
        },
        component: () => import('@/views/login')
    },
    {
        path:'/',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            title: '总览看板',
            icon: 'icon-bytedance-color',
        }
    },
    {
        path: '/site',
        redirect:'/site/list',
        name:'site',
        meta: {
            title: '站点管理'
        },
        children: [
            {
                path: 'list',
                name: 'site-list',
                component: SiteList,
                meta: {
                    title: '站点列表',
                    icon: 'icon-edit'
                }
            },
            {
                name: 'site-deatils',
                path: 'deatils',
                component: SiteDetails,
                meta: {
                    title: '站点详情',
                    icon: 'icon-edit'
                }
            },
        ],
    },
]

export default routes