<template> 
 <main>
  <navigator-bar></navigator-bar>
  <router-view></router-view>
 </main>
</template>
<script lang="ts" setup>
import NavigatorBar from '@/components/navigationBar.vue'
</script>
<style lang="scss">
  main {
    display: flex;
    flex-wrap: nowrap;
    height: 100vh;
    height: -webkit-fill-available;
    max-height: 100vh;
    overflow-x: auto;
    overflow-y: hidden;
  }
</style>