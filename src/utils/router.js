const children = [
    {
        path:"/setting",
        component:()=>import('@/pages/Setting/index.jsx'),
        meta:{
            title:"个人设置"
        }
    },
    {
        path:'/application',
        component:()=>import('@/pages/Application/index.jsx'),
        meta:{
            title:"应用"
        }
    },
    {
        path:'/application2',
        component:()=>import('@/pages/Application/index.jsx'),
        meta:{
            title:"应用2222"
        }
    },
    {
        path: '/accountManage',
        meta: {
          title: '账号管理',
          icon: 'icon-yuechi',
          color: '#2CCC6F'
        },
        component: () => import('@/pages/Setting/index.jsx'),
        routes: [{
            path: '/accountManage/accountList',
            name: 'accountList',
            meta: {
              title: '帐号列表'
            },
            component: () => import('@/pages/Application/index.jsx')
        }]
    }
];
const routes = [
    {
        path:'/login',
        component:()=>import('@/pages/Login/login.jsx'),
        meta:{
            title:"登录"
        }
    },
    {
        path:"/system",
        // component:()=>import('@/pages/System/index.jsx'),
        component:()=>import('@/pages/Index.jsx'),
        meta:{
            title:"系统"
        }
    },
    {
        path:"/",
        component:()=>import('@/pages/Home/index.jsx'),
        meta:{
            title:"首页"
        },
        //子路由
        routes:[...children]
    },
]


export default [...routes]
