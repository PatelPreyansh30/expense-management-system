import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './components/HomePage.vue'
import SavePage from './components/SavePage.vue'
import DailyBudgetPage from './components/DailyBudgetPage.vue'
import BasketPage from './components/BasketPage.vue'
import Login from './components/Login.vue'
import Logout from './components/Logout.vue'
import Signup from './components/Signup.vue'
import AddItems from './components/AddItems.vue'
import SearchResult from './components/SearchResult.vue'
import UpdateSalary from './components/UpdateSalary.vue'

const routes = [
    {
        name: 'HomePage',
        path: '/home',
        component: HomePage,
    },
    {
        name: 'SavePage',
        path: '/save',
        component: SavePage,
    },
    {
        name: 'DailyBudgetPage',
        path: '/daily-budget',
        component: DailyBudgetPage,
    },
    {
        name: 'BasketPage',
        path: '/basket',
        component: BasketPage,
    },
    {
        name: 'Login',
        path: '/login',
        component: Login,
    },
    {
        name: 'Signup',
        path: '/signup',
        component: Signup,
    },
    {
        name: 'Logout',
        path: '/logout',
        component: Logout,
    },
    {
        name: 'AddItem',
        path: '/bucket-view/:date',
        component: AddItems,
    },
    {
        name: 'SearchResult',
        path: '/search-result/:data',
        component: SearchResult,
    },
    {
        name: 'UpdateSalary',
        path: '/update-salary/:id/:salary',
        component: UpdateSalary,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router