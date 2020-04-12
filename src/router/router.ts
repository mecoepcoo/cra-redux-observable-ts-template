/*
 * @Author: your name
 * @Date: 2020-04-12 20:37:20
 * @LastEditTime: 2020-04-12 21:02:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \cra-redux-observable-ts-template\src\router\router.ts
 */
import loadable from '@loadable/component'
import { RouteInterface } from '@/types/route'

import { RouteDemoA, RouteDemoB } from './demoComponent'

// TODO: public路径从buildConfig里读取，注入环境变量使用
export const basename = ''

export const routes: RouteInterface[] = [
  {
    path: '/',
    exact: true,
    component: loadable(() => import('@/pages/demo/HelloWorldDemo/HelloWorldDemoPage')),
    name: 'home',
    title: 'react-home',
  },
  {
    path: '/home',
    component: loadable(() => import('@/pages/demo/HelloWorldDemo/HelloWorldDemoPage')),
    exact: true,
    name: 'home',
    title: 'HelloWorld',
    auth: true,
  },
  {
    path: '/a',
    component: RouteDemoA,
    name: 'demoA',
    title: 'DemoA',
    routes: [
      {
        path: '/a/b',
        component: RouteDemoB,
        exact: true,
        name: 'demoB',
        title: 'DemoB',
        auth: false,
      },
    ],
  },
  // 404 Not Found
  {
    path: '*',
    component: loadable(() => import('@/pages/status/404')),
    name: '404',
    title: '404',
  },
]
