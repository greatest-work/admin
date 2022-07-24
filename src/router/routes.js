/**
 * 站点
 */
const SiteDetail = () => import('@/views/site/detail');
const SiteList = () => import('@/views/site');

/**
 * 首页
 */
const Dashboard = () => import('@/views/dashboard');

/**
 * 文章管理
 */
const ArticleList = () => import('@/views/article');

 /**
 * 系统设置
 */
const SystemConfig = () => import('@/views/system');
const SystemLog = () => import('@/views/system/log');


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
            icon: 'icon-apps'
        }
    },
    {
        path: '/site',
        redirect:'/site/list',
        name:'site',
        meta: {
            title: '站点管理',
            icon: 'icon-computer'
        },
        children: [
            {
                path: 'list',
                name: 'site-list',
                component: SiteList,
                meta: {
                    title: '站点列表',
                }
            },
            {
                name: 'site-detail',
                path: 'detail',
                component: SiteDetail,
                meta: {
                    title: '站点详情',
                }
            },
        ],
    },
    {
        path: '/article',
        redirect:'/article/list',
        name:'article',
        meta: {
            title: '文章管理',
            icon: 'icon-bar-chart'
        },
        children: [
            {
                path: 'list',
                name: 'article-list',
                component: ArticleList,
                meta: {
                    title: '文章数据',
                }
            },
        ],
    },
    {
        path: '/system',
        redirect:'/system/log',
        name:'system',
        meta: {
            title: '系统管理',
            icon: 'icon-settings'
        },
        children: [
            {
                path: 'config',
                name: 'system-config',
                component: SystemConfig,
                meta: {
                    title: '全局配置',
                }
            },
            {
                path: 'log',
                name: 'log',
                component: SystemLog,
                meta: {
                    title: '操作日志',
                }
            },
        ],
    },
    {
        path: '/404',
        meta: {
            hidden: true,
        },
        component: () => import('@/views/error/404')
    },
    {
        path: '/403',
        meta: {
            hidden: true,
        },
        component: () => import('@/views/error/403')
    },
    {
        name: '*',
        path: '/:w+',
        redirect: '/404',
        meta: {
            hidden: true,
        },
    },
]

export default routes