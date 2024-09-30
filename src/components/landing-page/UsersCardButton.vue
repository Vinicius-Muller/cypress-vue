<template>
  <v-col cols="12">
    <v-card
      id="mainBtn"
      prepend-icon="mdi-user"
      append-icon="mdi-open-in-new"
      class="py-4"
      rounded="lg"
      color="surface-variant"
      title="Usuários"
      subtitle="Cadastro de usuários"
      rel="noopener noreferrer"
      variant="text"
      hover
      @click="$emit('open-user-form')"
    >
      <v-overlay
        opacity=".06"
        scrim="primary"
        contained
        model-value
        persistent
      />
    </v-card>
  </v-col>
</template>

<script lang="ts">
export default {
  name: "UsersCardButton",
};
</script>

