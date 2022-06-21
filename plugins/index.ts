
// 插件注册
import YwtIcon from '../plugins/YwtIcon.vue'
const components = [
    YwtIcon
]
 const install = (Vue:any)=>{
     if((install as any).installend) return
     (install as any).installend = true
     components.map((component)=>{
         Vue.component(component.name,component)
     })
 }
 if(typeof window !=='undefined'&&(window as any).Vue){
     install((window as any).Vue)
 }
 export default {
    // 导出的对象必须具备一个 install 方法
    install,
    // 组件列表
    ...components
}