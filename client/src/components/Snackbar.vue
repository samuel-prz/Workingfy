<template>
  <div class="text-center">
    <v-scroll-x-transition>
    <v-snackbar
      top=""
      :timeout="timeout"
      :color="snackbar.color"
      v-model="snackbar.active"
    >
    
      <h1 class="title">
        <v-icon class="mr-1">
          {{ snackbar.icon }}
        </v-icon>
        {{ snackbar.text }}
      </h1>

    </v-snackbar>
    </v-scroll-x-transition>
  </div>
</template>

<script>
  export default {
    name: 'Snackbar',
    data: () => ({
      timeout: 4000,
    }),
    props:['snackbar']
  }
</script>
