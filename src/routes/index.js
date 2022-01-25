import Vue from "vue";
import VueRouter from "vue-router";
import AskView from '../views/AskView';
import JobsView from '../views/JobsView';
import NewsView from '../views/NewsView';
import ItemView from '../views/ItemView';
import UserView from '../views/UserView';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode:'history',
    routes : [
        {
            path : '/',
            redirect : '/news'
        },
        {
            // path : url  주소
            path :'/news',
            // componet : url 주소로 갔을 때 표시할 컴포넌트
            name:'news',
            component:NewsView
        },
        {
            path :'/ask',
            name:'ask',
            component:AskView
        },
        {
            path :'/jobs',
            name:'jobs',
            component:JobsView
        },
        {
            path:'/item/:id',
            component: ItemView
        },
        {
            path:'/user/:id',
            component: UserView
        }
    ]
});