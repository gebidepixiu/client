import {createRouter, createWebHashHistory} from 'vue-router';

import DetailsCom from "../views/Details.vue";
import Details from "../components/details.vue";

import test1 from "../components/test1.vue";
import test2 from "../components/test2.vue";
import Information from "../views/Information.vue";
import text from "../components/text.vue";


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: ()=>import("../views/Home.vue")
        },
        {
            path: "/update",
            name: "update",
            component: ()=>import("../views/Update.vue")
        },
        {
            path: "/category",
            name: "category",
            component: ()=>import("../views/Category.vue")
        },
        {
            path: "/ranking",
            name: "ranking",
            component: ()=>import("../views/Ranking.vue")
        },
        {
            path: "/contributionsViw",
            name: "contributionsViw",
            component: ()=>import("../views/ContributionsViw.vue")
        },
        {
            path: "/detailed/:comid",
            name: "detailed",
            component: ()=>import("../views/Detailed.vue")
        },
        {
            path: "/Details/:comid/:chopid",
            name: "Details",
            component: ()=>import("../components/details.vue")
        },
        {
            path: "/text",
            name: "text",
            component: text,
            children:[{
                path: "text1",
                name: "text1",
                component: ()=>import("../components/test1.vue")
            }]
        },
        {
            path: "/text2",
            name: "text2",
            component: test2
        },
        {
            path: "/information",
            name: "information",
            component: Information,
            children:[{
                path: "UserInformation",
                name: "UserInformation",
                component: ()=>import("../components/information/UserInformation.vue")
            },{
                path: "UserFavorites",
                name: "UserFavorites",
                component: ()=>import("../components/information/UserFavorites.vue")
            },{
                path: "Order",
                name: "Order",
                component: ()=>import("../components/information/Order.vue")
            }
            ]
        },
        {
            path: "/search",
            name: "search",
            component: ()=>import("../views/Search.vue")
        },
        {
            path: "/login",
            name: "login",
            component: ()=>import("../views/Login.vue")
        }
    ]
})
export default router;
