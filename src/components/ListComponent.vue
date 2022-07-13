<template>
  <div v-for="(블로그, i) in 블로그글" :key="i">
    <!-- 
      페이지를 이동하고 싶다면? <router-link> or @click="" 도 이용할 수 있지만
      이걸 약간 다이나믹하게 이용하고 싶다면 @click에다가 $router.push()라고 써보자.
      $router.push()는 페이지를 이동시켜주는 함수다.
      * 주의!!
      $route는 현재 경로, $router는 페이지 이동 또는 router 자체
     -->
    <!-- <h5 @click="$router.push('/detail/0')">{{ 블로그.title }}</h5> -->
    <h5 @click="$router.push({path: '/detail/' + i})">{{ 블로그.title }}</h5>
    <p>{{ 블로그.date }}</p>
  </div>
</template>

<script>
export default {
  name: "ListComponent",
  props: {
    블로그글: Array,
  },
};
</script>

<style scoped>
/* 
  scoped : 해당 컴포넌트에만 css가 적용되게 하기 
*/
h5:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
