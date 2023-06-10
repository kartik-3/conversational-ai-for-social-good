<template>
  <v-app>
    <v-app-bar app color="primary">
        <v-btn depressed color="primary" class="text-h4 font-weight-bold" @click="goToHome">RKS Research Group</v-btn>

      <v-spacer></v-spacer>
        <v-btn
        depressed
        color="primary"
        @click="goToPeople"
      >
        people
      </v-btn>
        <v-btn
        depressed
        color="primary"
        @click="goToPublications"
      >
        publications
      </v-btn>
        <v-btn
        depressed
        color="primary"
        @click="goToProjects"
      >
        projects
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { routerPush } from './utils/constants';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods: {
    goToHome() {
      routerPush(this, "home")
    },
    goToPeople() {
      routerPush(this, "people")
    },
    goToPublications() {
      routerPush(this, "publications")
    },
    goToProjects() {
      routerPush(this, "projects")
    },
  }
};
</script>
