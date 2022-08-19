//the ts of router
import {RouteRecordRaw} from 'vue-router'

/*此处扩展的类型*/
export interface RouteItemTy {
    hidden?: boolean//是否展示
    name?: string//name
    path?: string//路径
    meta?: {
        title: string//标题
        icon?: string//图标
        roles?: Array<string>//权限
    }
    children?: RouterTy
}

export type RouterRowTy = RouteRecordRaw & RouteItemTy
export type RouterTy = Array<RouterRowTy>
