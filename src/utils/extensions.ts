/**
 * 加载动态路由
 */
let routers: any = []
const routeFiles: any = import.meta.glob('@/views/**/*router.ts', {eager: true})
for (const path in routeFiles) {
    routers = routers.concat(routeFiles[path].default)
}
export default routers