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
              data-cy="name"
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
              data-cy="sirname"
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
              data-cy="email"
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
              data-cy="permissions"
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
              cy="date-start"
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
              cy="date-end"
              label="Data Final"
              @update-date="(val) => (user.dateEnd = val)"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-col cols="12" class="my-10">
      <v-row justify="space-evenly">
        <v-btn 
          class="bg-error" 
          @click="emit('close')"
        >Voltar</v-btn>

        <v-btn 
          class="bg-success" 
          @click="save"
        >Cadastrar</v-btn>
      </v-row>
    </v-col>
  </v-col>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { User } from "../../mixins/UserInterface";
import DatePicker from "@/components/layout/DatePicker.vue";

const emit = defineEmits(["close"]);

const user = ref<User>({
  firstName: undefined,
  sirName: undefined,
  email: undefined,
  permissions: [],
  dateInitial: undefined,
  dateEnd: undefined,
});

async function save() {
  try {
    await new Promise((value) => {
      Object.keys(user.value).forEach((key) => {
        user.value[key] = undefined;
      });

      Promise.resolve(value);
    });
  } catch(error) {
    return error;
  }
  
  emit("close");
}
</script>

<style></style>
