<template>
  <div id="tab-bar">
      <slot></slot>
  </div>
</template>

<script>

export default {
  name: "TabBar",
};
</script>

<style lang="scss" scoped>
#tab-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0px -3px 1px rgba(100, 100, 100, 0.1);
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 2px;
}
</style>