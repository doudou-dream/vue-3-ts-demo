import {createRouter, createWebHistory, Router} from "vue-router";
import {RouterTy} from "./router";
import extensions from "@/utils/extensions";

const constantRoutes: RouterTy = [
    ...extensions,
]

let router: Router = createRouter({
    history: createWebHistory(),
    scrollBehavior: () => ({top: 0}),
    routes: constantRoutes
})

/**
 * 重新初始化
 */
export function resetRouter() {
    router = createRouter({
        history: createWebHistory(),
        scrollBehavior: () => ({top: 0}),
        routes: constantRoutes
    })
}

export default router
