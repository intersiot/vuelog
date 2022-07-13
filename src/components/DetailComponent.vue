<template>
  <!-- 
    현재 url정보는 route에 담겨 있음
    $route.params하면 파라미터자리에 기입된 거 알려줌
    만약 이름이 id인 파라미터를 가지고 오고싶다면??
    => $route.params.id
  -->
  <div>
    <h4>상세페이지</h4>
    <h5>{{ 블로그글[$route.params.id].title }}</h5> 
    <p>{{ 블로그글[$route.params.id].content }}</p>
    <!-- 내가 nested routes를 보여주려고 정한 곳 -->
    <router-view></router-view>
  </div>  
</template>

<script>
export default {
  name: 'DetailComponent',
  props: {
    블로그글: Array,
  }

}
</script>

<style>

</style>
