<template>
  <HeaderVue />
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router';
import HeaderVue from './components/HeaderVue.vue'

</script>

<style scoped></style>