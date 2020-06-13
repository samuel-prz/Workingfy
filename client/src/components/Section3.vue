<template>
    <div>
        <v-container>
        <v-layout wrap="">

            <v-flex md4 sm12 xs12>
                <img :src="section3Items.img" width="100%" contain class="my-10">
            </v-flex>

            <v-flex md8 sm12 xs12 d-block class="text-right">
                <h1 class="display-2 my-10 font-weight-bold"> {{section3Items.title}} </h1>
                <v-btn class="my-10" x-large="" color="info" :to="section3Items.btn.route">
                    {{ section3Items.btn.text }}
                </v-btn>
            </v-flex>

            
        </v-layout>
       </v-container>
    </div>
</template>

<script>
export default {
    name: 'Section3',
    props: ['section3Items']
}
</script>