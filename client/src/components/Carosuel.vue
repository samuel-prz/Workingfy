<template>
  <div>
    <v-carousel cycle height="500" >
      <v-carousel-item
      v-for="(item, index) in carosuelItems"
      :key="index"
      :src="item.img"
      reverse-transition="fade-transition"
      >
        <v-container>
          <v-layout align-center style="margin-top: 150px">
            <v-flex md12>
              <h2 class="white--text display-3 text-center">
                {{item.text}}
              </h2>
            </v-flex>
          </v-layout>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
  export default {
    //items a renderizar
    props: ['carosuelItems']
  }
</script>
