<template>
  <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
  <div class="people mx-12">
    <v-alert class="my-6 text-justify text-body-1" color="blue" dense text elevation="2">
      Professors
    </v-alert>
    <v-row>
      <v-col v-for="person in people" v-if="person.role == 'professor'" :key="person.name"
        xl="3" lg="3" md="4" sm="6" xs="12">
        <people-card :image="person.image" :link="person.link" :name="person.name" :title="person.title"
          :department="person.department">
        </people-card>
      </v-col>
    </v-row>
    <v-divider class="my-6"></v-divider>
    <v-alert class="my-6 text-justify text-body-1" color="blue" dense text elevation="2">
      PhD Students
    </v-alert>
    <v-row>
      <v-col v-for="person in people" v-if="person.role == 'phd_student'" :key="person.name"
        xl="3" lg="3" md="4" sm="6" xs="12">
        <people-card :image="person.image" :link="person.link" :name="person.name" :title="person.title"
          :department="person.department">
        </people-card>
      </v-col>
    </v-row>
    <v-divider class="my-6"></v-divider>
    <v-alert class="my-6 text-justify text-body-1" color="blue" dense text elevation="2">
      Graduate Students
    </v-alert>
    <v-row>
      <v-col v-for="person in people" v-if="person.role == 'graduate_student'" :key="person.name"
        xl="3" lg="3" md="4" sm="6" xs="12">
        <people-card :image="person.image" :link="person.link" :name="person.name" :title="person.title"
          :department="person.department">
        </people-card>
      </v-col>
    </v-row>
    <v-divider class="my-6"></v-divider>
  </div>
</template>

<script>
import PeopleCard from '../components/PeopleCard.vue'
import peopleData from "../data/people/peopleData.json"

export default {
  name: 'PeopleView',
  components: {
    PeopleCard,
  },
  data: () => ({
    people: peopleData,
    publicPath: process.env.BASE_URL
  })
}
</script>
