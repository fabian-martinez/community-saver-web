<template lang="">
  <main>
    <navigator-bar></navigator-bar>
    <router-view></router-view>
  </main>
</template>
<script lang="ts" setup>
import NavigatorBar from '@/components/navigationBar.vue'

</script>
<style lang="scss" scoped>
    #app {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    header {
      background-color: #007bff;
      color: white;
      text-align: center;
      padding: 0px;
    }

    main {
      flex: 1;
      padding: 0;
      display: flex;
      flex-wrap: nowrap;
      height: 100vh;
      height: -webkit-fill-available;
      max-height: 100vh;
      overflow-x: auto;
      overflow-y: hidden;
  }

    section {
      margin-bottom: 30px;
    }

    h2 {
      color: #007bff;
    }

    a {
      color: #007bff;
      text-decoration: none;
    }

    .image-container {
      overflow: hidden;
      margin: 0px;
      position: relative;
      width: 100%;
      height: 300px; /* Ajusta la altura según tu diseño */
    }

    .image-container img {
      width: 100%;
      height: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    footer {
      background-color: #f0f0f0;
      text-align: center;
      padding: 10px 0;
    }
</style>