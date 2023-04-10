import { createRouter, createWebHashHistory } from "vue-router"
import HomeView from "../views/Home.vue"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/directory",
      name: "directory",
      component: () => import("../views/Directory.vue"),
      children:[
        {
            path: ":country",
            name: "states",
            props: true,
            component: ()=>import("../views/State.vue"),
            children:[
                {
                    path: ":state",
                    name: "cities",
                    props: true,
                    component: ()=>import("../views/City.vue")
                }
            ]
        }
      ]

    }
  ]
})

export default router
