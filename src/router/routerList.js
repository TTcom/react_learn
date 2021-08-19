
import {
    lazy
} from 'react';

const routerList = [{
        path: '/',
        name: "登录", // 名字
        exact: true,
        component: lazy(() => import('../pages/login')) // 懒加载方案
    },
    {
        path: '/user',
        name: "用户管理",
        component: lazy(() => import('../pages/user')),
        routes: [{
            path: "/user/userList",
            name: "用户列表",
            exact: true,
            component: lazy(() => import('../pages/user/userList')),
            routes: [{
                path: "/user/userList/userDetail",
                name: "用户详情",
                exact: true,
                component: lazy(() => import('../pages/user/userDetail')),
            }]
        }]
    }
]
export default routerList