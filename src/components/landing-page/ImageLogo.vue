<template>
  <v-img class="mb-4" height="150" :src="imgSrc" />
</template>

<script setup lang="ts">
defineProps({
  imgSrc: String,
});
</script>
