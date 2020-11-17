<template>
  <tab-bar>
    <tab-bar-item path="/" :activeColor="blue">
      <template v-slot:item-icon>
        <img src="./assets/img/tabbar/category.svg" />
      </template>
      <template v-slot:item-icon-active>
        <img src="./assets/img/tabbar/category_active.svg" />
      </template>
      <template v-slot:item-text> <div>首页</div> </template>
      <!-- <img slot='item-icon' src="../../assets/img/tabbar/category.svg"/>
          <div slot="item-text">首页</div> -->
    </tab-bar-item>
    <tab-bar-item path="/about" :activeColor="red">
      <template v-slot:item-icon>
        <img src="./assets/img/tabbar/home.svg" />
      </template>
      <template v-slot:item-icon-active>
        <img src="./assets/img/tabbar/category_active.svg" />
      </template>
      <template v-slot:item-text> <div>首页</div> </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "./components/tabbar/TabBarItem";
export default {
  components: { TabBar, TabBarItem }
};
</script>

<style>
</style>