<template>
  <div id="nav">
    <router-link to="/" replace>Home</router-link> |
    <router-link to="/about" replace>About</router-link>
    <router-link
      :to="{
        path: 'profile',
        query: {
          age: '34',
          name: 'aa',
        },
      }"
      >profile</router-link
    >
    <router-link :to="'/user/' + 'aaa'" replace>User</router-link>
  </div>
  <!-- <div id="tab-bar">
    <div class="tab-bar-item">首页</div>
    <div class="tab-bar-item">首页</div>
    <div class="tab-bar-item">首页</div>
    <div class="tab-bar-item">首页</div>
  </div> -->

  <keep-alive>
    <router-view />
  </keep-alive>
   <!-- <router-view /> -->
  <main-tab-bar></main-tab-bar>
</template>
<script>
import MainTabBar from './components/MainTabBar'
export default {
 components:{MainTabBar}
};
</script>

<style lang="scss">
// @import "./assets/bass.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    // &.router-link-exact-active {
    //   color: #42b983;
    // }
  }
}

.active {
  color: aquamarine;
}
.router-link-active {
  color: red;
}
</style>
