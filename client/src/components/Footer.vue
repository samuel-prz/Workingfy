<template>
  <v-card height="150" dark >
    <v-footer
      absolute
      dark=""
      class="font-weight-medium"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Workingfy</strong>
      </v-col>
      <v-col
        class="text-center"
        cols="12"
      >
        Desarrollado por: Adrian Viñas y Samuel Perez
      </v-col>
    </v-footer>
  </v-card>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

