<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand text-white" href="#">Vuelog</a>
      <button class="navbar-toggler bg-white" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon text"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/">
              <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/list">
              <a class="nav-link text-white" href="#">List</a>
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled text-white" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="mt-4">
    <router-view :블로그글="블로그글"></router-view>
  </div>
  <!-- <List :블로그글="블로그글[i]" v-for="(블로그, i) in 블로그글" :key="블로그" /> -->
</template>

<script>
import blogData from './assets/blog.js'
// import List from './components/ListComponent.vue'

export default {
  name: 'App',
  data() {
    return {
      블로그글: blogData,
    }
  },
  components: {
    // List,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Gowun Batang', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  width: 100%;
  height: 100px;
  background: cadetblue;
}
li a {
  text-decoration: none;
}
</style>
