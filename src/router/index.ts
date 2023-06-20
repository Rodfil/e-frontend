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
            path: "/Login",
            name: "Login",
            component: () => import(
                "@/views/LoginView.vue"
            )
        },
        {
            path: "/Register",
            name: "Register",
            component: () => import(
                "@/views/RegisterView.vue"
            )
        },
        {
            path: "/Dashboard",
            name: "Dashboard",
            component: () => import(
                "@/views/DashboardView.vue"
            )
        },
        {
            path: "/Notification",
            name: "Notification",
            component: () => import(
                "@/views/NotificationView.vue"
            )
        }
    ],
})


export default router;