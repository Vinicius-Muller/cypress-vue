<template>
  <v-col cols="12">
    <v-col cols="12" class="my-4">
      <h2 class="text-center">Cadastro de Usuários</h2>
    </v-col>
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
              v-model="user.firstName"
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
              v-model="user.sirName"
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
              v-model="user.email"
            ></v-text-field>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto" color="surface-light">
          <v-card-text class="py-2 px-2">
            <v-autocomplete
              variant="outlined"
              density="compact"
              hide-details
              bg-color="white"
              label="permissões"
              prepend-inner-icon="mdi-account"
              no-data-text="Nenhum item encontrado"
              :items="[]"
              item-title="title"
              item-value="id"
              v-model="user.permissions"
            ></v-autocomplete>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-card class="mx-auto" color="surface-light">
          <v-card-text class="py-2 px-2">
            <date-picker
              label="Data Inicial"
              @update-date="(val) => (user.dateInitial = val)"
            />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="mx-auto" color="surface-light">
          <v-card-text class="py-2 px-2">
            <date-picker
              label="Data Final"
              @update-date="(val) => (user.dateEnd = val)"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-col cols="12" class="my-10">
      <v-row justify="space-evenly">
        <v-btn class="bg-error" @click="emit('close')">Voltar</v-btn>

        <v-btn class="bg-success">Cadastrar</v-btn>
      </v-row>
    </v-col>
  </v-col>
</template>

<script setup lang="ts">
import DatePicker from "@/components/layout/DatePicker.vue";
import { ref } from "vue";

const emit = defineEmits(["close"]);

const user = ref<{
  firstName: String | undefined;
  sirName: String | undefined;
  email: String | undefined;
  permissions: String[];
  dateInitial: Date | undefined;
  dateEnd: Date | undefined;
}>({
  firstName: undefined,
  sirName: undefined,
  email: undefined,
  permissions: [],
  dateInitial: undefined,
  dateEnd: undefined,
});
</script>

<style></style>
