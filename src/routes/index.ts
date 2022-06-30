import Home from '../views/Home/index'
import About from '../views/About/index'
import Contact from '../views/Contact/index'
// 导入路由管理工具
// import { RouteConfig } from 'react-router-config'
 
const routes = [
  {
    path:'/',
    exact:true,
    component: Home
  },
  {
    path:'/about',
    exact:true,
    component: About
  },
  {
    path:'/contact',
    exact:true,
    component: Contact
  }
]
 
export default routes;