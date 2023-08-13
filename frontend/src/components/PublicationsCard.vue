<template>
  <v-card elevation="2" tile outlined :color="color">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle class="mb-2 pb-0 font-weight-bold">{{ authors }}</v-card-subtitle>
    <!-- <v-card-text style="padding-bottom: 0px;">{{ conference }}</v-card-text> -->
    <v-card-text>
      <v-expansion-panels accordion>
        <v-expansion-panel>
          <v-expansion-panel-header :color="color" style="font-weight: 500;">
            Abstract
          </v-expansion-panel-header>
          <v-expansion-panel-content :color="color">
            {{ abstract }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
    <v-card-actions>
      <v-btn :disabled="(publicationLink == null)" text color="indigo accent-4" :href="publicationLink" target="_blank">
        Link to publication
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'PublicationsCard',

  data: () => ({
  }),
  props: ['color', 'title', 'authors', 'conference', 'abstract', 'publicationLink']
}
</script>
