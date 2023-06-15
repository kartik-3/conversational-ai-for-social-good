<template>
  <v-sheet color="grey lighten-5" rounded class=" my-5" elevation="1">
  <v-card class="" outlined elevation="2">
    <v-card-title>
      {{title}}
    </v-card-title>
    <v-card-text>
      {{text}}
    </v-card-text>
  </v-card>
  </v-sheet>
</template>

<script>
export default {
  name: 'ProjectsCard',

  data: () => ({
    publicPath: process.env.BASE_URL
  }),
  props: ['title', 'text']
}
</script>