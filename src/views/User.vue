<template>
  <div class="home">
    面试结果显示哈哈哈{{userId}}
  </div>
</template>

<script>

export default {
  name: 'User',
  computed:{
    userId(){
        return this.$route.params.id;
    }  
  }
}
</script>