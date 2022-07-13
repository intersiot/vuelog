// import { createWebHistory, createRouter } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
import List from './components/ListComponent.vue';
import Home from './components/HomeComponent.vue';
import Detail from './components/DetailComponent.vue';
import Author from './components/AuthorComponent.vue';
import Comment from './components/CommentComponent.vue';

const routes = [
  // {
  //   path: "/경로",
  //   component: import해온 컴포넌트,
  // },
  // 같은 route에 걸리면 위에 있는 걸 적용시킨다.
  {
    path: "/detail/:id", // :은 아무문자라는 뜻, url의 파라미터문법
    component: Detail,
    // 페이지 안에서 페이지를 더 쪼개고 싶다면? nested routes 사용하면 된다.
    // nested routes 만드는 법
    // children: {} 안에 만드셈 -> 그리고 어디서 보여줄지 -> <router-view>
    // 라우터 관련 에러는 보통 콘솔창 ㄱㄱ
    children: [
      {
        path: "author", // 슬래시는 홈페이지라는 뜻임, 여기서는 상대경로로 적어주면 에러가 안뜰거임
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      }
    ],
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
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
});

export default router;
