<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <v-row>
        <users-card-button @open-user-form="openUsersSidebar" />
      </v-row>

      <v-navigation-drawer
        v-model="sidebarUserController"
        :location="$vuetify.display.mobile ? 'bottom' : 'right'"
        width="500"
      >
        <users-form @close="sidebarUserController = false" />
      </v-navigation-drawer>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { ref, nextTick, defineAsyncComponent } from "vue";
const UsersForm = defineAsyncComponent(() => import("./UsersForm.vue"));
const UsersCardButton = defineAsyncComponent(
  () => import("./UsersCardButton.vue")
);

let sidebarUserController = ref<Boolean>(false);
async function openUsersSidebar() {
  sidebarUserController.value = true;
  await nextTick();
}
</script>
