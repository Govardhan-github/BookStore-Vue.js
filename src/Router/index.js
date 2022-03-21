const { createRouter, createWebHistory } = require("vue-router")
const routes = [
    {
        path: '/', component: () => import('../Pages/welcomePage.vue')
    },
    {
        path: '/Home', component: () => import('../Pages/Home.vue')
    },
    
    {
        path: '/Signup', component: () => import('../Pages/signup.vue')

    },
    {
        path: '/', component: () => import('../Pages/Dashboard.vue'),
        children: [
            {
                path: '/Getbooks',

                component: () => import('../Pages/Getbooks.vue'),
            },

            {
                path: '/bookdetails',
                component: () => import('../Pages/BookDetails.vue'),
            },
            {
                path: '/wishlist', name: 'wishlistpage',
                component: () => import('../Pages/Wishlist.vue')
            },
            {
                path: '/cartList', name: 'cartListPage',
                component: () => import('../Pages/Cart.vue')
            },
            {
                path: '/myorders',
                component: () => import('../Pages/MyOrders.vue')
            },
            {
                path: '/placeOrder',
                component: () => import('../Pages/OrderPlaced.vue')
            },
            {
                path: '/Profile',
                component: () => import('../Pages/Profile.vue')
            }

        ]
    },
    // {
    //     path: '/login',
    //     component: () => import('../Pages/login.vue')
    // },
    // {
    //     path: '/signUp',

    //     component: () => import('../Pages/signup.vue')
    // },
    // {path:'/Getbooks',

    // component:() => import('../Pages/Getbooks.vue')
    // },






]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
export default router;