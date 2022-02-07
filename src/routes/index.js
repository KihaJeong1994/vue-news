import Vue from "vue";
import VueRouter from "vue-router";
import AskView from '../views/AskView';
import JobsView from '../views/JobsView';
import NewsView from '../views/NewsView';
import ItemView from '../views/ItemView';
import UserView from '../views/UserView';
import bus from "../utils/bus";
import {store} from "../store/index.js"
// import createListView from '../views/CreateListView'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            // path : url  주소
            path: '/news',
            // componet : url 주소로 갔을 때 표시할 컴포넌트
            name: 'news',
            component: NewsView,
            // component:createListView('NewsView')
            // 라우터 네비게이션 가드 적용 : 특정 URL에 접근하기 전의 동작을 정의하는 속성
            beforeEnter: (to, from, next) => {
                bus.$emit("start::spinner");
                store.dispatch(`FETCH_LIST`, to.name)
                    .then(() => {
                        console.log("fetched");
                        // bus.$emit("end::spinner");
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                        bus.$emit("end::spinner");
                    });
            },
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            // component: createListView('AskView')
            beforeEnter : (to, from, next) => {
                bus.$emit("start::spinner");
                store.dispatch(`FETCH_LIST`, to.name)
                    .then(() => {
                        console.log("fetched");
                        // bus.$emit("end::spinner");
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                        bus.$emit("end::spinner");
                    });
            },

        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            // component: createListView('JobsView')
            beforeEnter : (to, from, next) => {
                bus.$emit("start::spinner");
                store.dispatch(`FETCH_LIST`, to.name)
                    .then(() => {
                        console.log("fetched");
                        // bus.$emit("end::spinner");
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                        bus.$emit("end::spinner");
                    });
            },
        },
        {
            path: '/item/:id',
            component: ItemView
        },
        {
            path: '/user/:id',
            component: UserView
        }
    ]
});