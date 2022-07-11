<template>
  <!-- 이름이 id인 파라미터를 가지고 올때 -->
  <div>
    <h4>상세페이지</h4>
    <h5>{{ 블로그글[$route.params.id].title }}</h5>
    <p>{{ 블로그글[$route.params.id].content }}</p>
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