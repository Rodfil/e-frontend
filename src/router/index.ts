import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "LandingPage",
            component: () => import(
                "@/views/LandingPage.vue"
            )
        },
        {
            path: "/login",
            name: "login",
            component: () => import(
                "@/views/LoginView.vue"
            )
        },
        {
            path: "/register",
            name: "register",
            component: () => import(
                "@/views/RegisterView.vue"
            )
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: () => import(
                "@/views/DashboardView.vue"
            )
        },
        {
            path: "/notification",
            name: "notification",
            component: () => import(
                "@/views/NotificationView.vue"
            )
        },
        {
            path: "/profile",
            name: "profile",
            component: () => import(
                "@/views/ProfileView.vue"
            )
        }
    ],
})


export default router;