<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStlye">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor:{
        type:String,
        default:'red'
    }
  },
  data() {
    return {
     
    };
  },
  computed: {
    isActive() {
        console.log(this.$route)
        return this.$route.path.indexOf(this.path)!==-1
    },
    activeStlye(){
        return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods: {
    itemClick() {
        console.log('天官赐福')
      this.$router.replace(this.path);
    },
  },
};
</script>

<style lang="scss" scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
}

.active {
  color: pink;
}
</style>

