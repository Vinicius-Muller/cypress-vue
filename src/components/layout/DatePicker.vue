<template>
  <v-menu :close-on-content-click="false" v-model="menu">
    <template #activator="{ props }">
      <v-text-field
        prepend-inner-icon="mdi-calendar"
        density="compact"
        :label="label"
        variant="solo"
        hide-details
        single-line
        v-bind="props"
        v-model="computedDate"
        readonly
      ></v-text-field>
    </template>

    <v-date-picker v-model="date"></v-date-picker>
  </v-menu>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { parseDate } from "@/mixins/features";

defineProps({
  label: String,
});

const emit = defineEmits(["update-date"]);

const menu = ref<Boolean>(false);

const date = ref<Date | any>(null);
const computedDate = computed(() => parseDate(date.value));

watch(date, () => {
  menu.value = false;
  emit("update-date", computedDate);
});
</script>

<style></style>
