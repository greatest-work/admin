
import { createRouter, createWebHistory } from 'vue-router'
/**
 * 站点
 */
const SiteDetails = () => import('@/views/site/details');
const SiteList = () => import('@/views/site/list');


const routes = [
    {
        path:'/',
        redirect:'/site/list'  // 重定向
    },
    {
        path: '/login',
        component: () => import('@/views/login')
    },
    {
        path: '/site',
        redirect:'/site/list',
        children: [
            {
                path: 'list',
                component: SiteList,
            },
            {
                path: 'deatils/:id',
                component: SiteDetails,
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: () => ({ left: 0, top: 0 })
})
 
export default router