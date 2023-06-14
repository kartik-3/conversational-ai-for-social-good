<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        v-for="(publication, i) in publications"
        :key="publication.title"
      >
      <publications-card 
        :title="publication.title"
        :authors="publication.authors"
        :conference="publication.conference"
        :abstract="publication.abstract"
        :publicationLink="(publication.publicationLink ? publication.publicationLink : null)"
        :color="(i%2 == 0 ? 'blue lighten-5': 'indigo lighten-5')"
      >
    </publications-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PublicationsCard from '../components/PublicationsCard'
import publicationsData from "../data/publications/publicationsData.json"

export default {
  name: 'PublicationsView',
  components: {
    PublicationsCard,
  },
  data: () => ({
    publications: publicationsData
  }),
}
</script>
