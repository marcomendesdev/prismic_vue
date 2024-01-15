<template>
  <RouterLink :to="to">{{ title }}</RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  to: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
</style>