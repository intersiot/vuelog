import { createWebHistory, createRouter } from "vue-router";
import List from './components/ListComponent.vue';
import Home from './components/HomeComponent.vue';
import Detail from './components/DetailComponent.vue';

const routes = [
  // {
  //   path: "/경로",
  //   component: import해온 컴포넌트,
  // },
  {
    path: "/detail/:id", // :은 아무문자라는 뜻, url의 파라미터문법
    component: Detail,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/:anything(.*)", // 슬래시 뒤에 아무문자 입력하면 이 페이지를 보여달라
    component: Home, // 404 페이지 뷰파일로 만들고 여기에 넣으면 됨
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;