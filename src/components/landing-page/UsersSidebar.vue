<template>
  <v-navigation-drawer
    v-model="drawer"
    :location="$vuetify.display.mobile ? 'bottom' : 'right'"
    width="500"
  >
    <v-list :items="list"></v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
const props = defineProps({
  open: Boolean,
});

const drawer = ref<Boolean>(false);

watch(props.open, (val: Boolean) => {
  console.log(val);
});

console.log(props);

const list = ref<{ title: string; value: number }[]>([
  {
    title: "Foo",
    value: 12,
  },
]);
</script>
