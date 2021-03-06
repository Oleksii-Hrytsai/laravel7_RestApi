import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

export default new VueRouter(
    {
        mode:'history',
        routes:[
            {
                path: 'fruits', component: () => import ('./components/Fruit/FruitComponent'),
                name: 'fruit.index'
            }
        ]
})
