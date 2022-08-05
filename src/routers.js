import { createWebHistory, createRouter } from 'vue-router'
import SavePage from './components/SavePage.vue'
import DailyBudgetPage from './components/DailyBudgetPage.vue'
import BasketPage from './components/BasketPage.vue'

const routes = [
    {
        name: 'SavePage',
        path: '/save-page',
        component: SavePage,
    },
    {
        name: 'DailyBudgetPage',
        path: '/daily-budget-page',
        component: DailyBudgetPage,
    },
    {
        name: 'BasketPage',
        path: '/basket-page',
        component: BasketPage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router