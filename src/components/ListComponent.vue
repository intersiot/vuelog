<template>
  <div v-for="(블로그, i) in 블로그글" :key="i">
    <router-link to="/detail">
      <h5>{{ 블로그.title }}</h5>
    </router-link>
    <p>{{ 블로그.date }}</p>
  </div>
</template>

<script>
export default {
  name: 'ListComponent',
  props: {
    블로그글: Array,
  },
}
</script>

<style>

</style>