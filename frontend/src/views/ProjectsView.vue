<template>
  <v-container>
    <div v-for="project in projects" :key="project.title">
      <projects-card :title="project.title" :text="project.text"></projects-card>
    </div>
  </v-container>
</template>

<script>
import ProjectsCard from '../components/ProjectsCard.vue'
import projectsData from "../data/projects/projectsData.json"

export default {
  name: 'PeopleView',
  components: {
    ProjectsCard,
  },
  data: () => ({
    projects: projectsData,
  })
}
</script>