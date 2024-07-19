<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <image-logo imgSrc="@/assets/logo.png" />
      <v-row>
        <users-card-button @open-user-form="openUsersSidebar" />
      </v-row>

      <v-navigation-drawer
        v-model="sidebarUserController"
        :location="$vuetify.display.mobile ? 'bottom' : 'right'"
        width="500"
      >
        <v-col cols="12">
          <v-row>
            <v-col cols="12" md="6">
              <v-card class="mx-auto" color="surface-light">
                <v-card-text class="py-2 px-2">
                  <v-text-field
                    prepend-inner-icon="mdi-account"
                    density="compact"
                    label="Nome"
                    variant="solo"
                    hide-details
                    single-line
                  ></v-text-field>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12" md="6">
              <v-card class="mx-auto" color="surface-light">
                <v-card-text class="py-2 px-2">
                  <v-text-field
                    prepend-inner-icon="mdi-account"
                    density="compact"
                    label="Sobrenome"
                    variant="solo"
                    hide-details
                    single-line
                  ></v-text-field>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-card class="mx-auto" color="surface-light">
                <v-card-text class="py-2 px-2">
                  <v-text-field
                    prepend-inner-icon="mdi-email"
                    density="compact"
                    label="email"
                    variant="solo"
                    hide-details
                    single-line
                  ></v-text-field>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-navigation-drawer>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue";

let sidebarUserController = ref<Boolean>(false);

async function openUsersSidebar() {
  sidebarUserController.value = true;
  await nextTick();
}
</script>
