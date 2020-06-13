<template>
    <div>
        <v-card color="primary" min-height="200"  tile justify-center="">
            <v-container class="py-12">
                <v-layout wrap="">

                    <v-flex md3 class="text-center mx-12 my-12 white--text"
                    v-for="(item, index) in section2Items" :key="index"
                    >
                        <v-icon size="75" dark class="pa-5">
                            {{ item.icon }}
                        </v-icon>
                        <p class="title">
                            {{ item.text }}
                        </p>
                    </v-flex>

                </v-layout>
            </v-container>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'Section2',
    props: ['section2Items']
}
</script>