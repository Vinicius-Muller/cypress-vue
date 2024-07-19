<template>
  <v-img class="mb-4" height="150" :src="imgSrc" />
</template>

<script lang="ts">
export default {
  name: "ImageLogo",
  props: {
    imgSrc: String,
  },
};
</script>
