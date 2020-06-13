<template>
    <div>
        <v-container>
        <v-layout wrap="">

            <v-flex md8 sm12 xs12 d-block>
                <h1 class="display-2 my-10 font-weight-bold"> {{section1Items.title}} </h1>
                <li class="my-3 title" v-for="(item, index) in section1Items.subtitle" :key="index">
                    {{ item }}
                </li>
                <v-btn class="my-10" x-large="" color="primary" :to="section1Items.btn.route">
                    {{ section1Items.btn.text }}
                </v-btn>
            </v-flex>

            <v-flex md4 sm12 xs12>
                <img :src="section1Items.img" width="100%" contain class="my-10">
            </v-flex>
            
        </v-layout>
       </v-container>
    </div>
</template>

<script>
export default {
    name: 'Section1',
    props: ['section1Items']
    
}
</script>