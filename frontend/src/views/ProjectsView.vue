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

<!-- <v-card class="mx-auto" outlined>
  <v-card-title>
    Deception Awareness and Reselience Training (DART)
  </v-card-title>
  <v-card-text>
    The Deception Awareness and Resilience Training (DART) platform helps seniors recognize
    threats and protect themselves. A collaboration between researchers, game designers, and community
    organizations, DART is unique in tailoring its curriculum and using gamification to make training accessible and
    engaging for seniors.
    <br>
    The team is currently developing multiple chatbots for the DART project. The first is a chatbot
    which could help users by answering their queries about the various modules within DART Learn. There is another
    chatbot which would help users reflect on their learning and experience with disinformation and misinformation.
    Both the chatbots are deterministic and developed using RASA framework, with plans to add a neural bot and
    speech recognition soon.
  </v-card-text>
</v-card> -->