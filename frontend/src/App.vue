<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-btn depressed color="primary" class="text-h4 font-weight-bold" @click="goToHome">RK Srihari Research
        Group</v-btn>

      <v-spacer></v-spacer>
      <v-btn depressed color="primary" @click="goToPeople">
        people
      </v-btn>
      <v-btn depressed color="primary" @click="goToPublications">
        publications
      </v-btn>
      <v-btn depressed color="primary" @click="goToProjects">
        projects
      </v-btn>
    </v-app-bar>
    <v-footer color="teal lighten-5" style="top: 64px">
      <v-col style="font-weight: bold; font-size: x-large;" cols="12">
        {{ currentRouteName }}
      </v-col>
    </v-footer>

    <v-main>
      <router-view />
    </v-main>
    <v-snackbar height="64" v-model="snackbar" text color="primary" :timeout="3000">
      <v-icon large color="amber lighten-1"> mdi mdi-alert-decagram</v-icon>
      <span class="ml-4">This site is still under construction!</span>
    </v-snackbar>

    <v-footer color="blue-grey darken-4" padless>
      <v-col class="text-center">
        <p class="white--text mb-0">2023 • State University of New York at Buffalo
          <br>
          This site is still under construction.
        </p>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import { routerPush } from './utils/constants';

export default {
  name: 'App',

  data: () => ({
    snackbar: false,
    text: `This site is still under construction!`,
  }),
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  methods: {
    goToHome() {
      routerPush(this, "Home")
    },
    goToPeople() {
      routerPush(this, "People")
    },
    goToPublications() {
      routerPush(this, "Publications")
    },
    goToProjects() {
      routerPush(this, "Projects")
    }
  },
  mounted() {
    this.snackbar = true
  }
};
</script>
