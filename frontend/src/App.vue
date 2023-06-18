<template>
  <v-app>
    <v-app-bar app color="primary">
      <span><v-btn depressed color="primary" class="text-h5 font-weight-bold text-left" @click="goToHome"><v-icon v-if="$vuetify.breakpoint.width < 1000">mdi mdi-home</v-icon><span v-if="$vuetify.breakpoint.width > 1000"> Conversational AI for Social Good</span></v-btn></span>
      <v-spacer></v-spacer>
      <v-btn depressed color="primary" @click="goToPeople">
        <span><v-icon>mdi mdi-account-multiple</v-icon><span v-if="$vuetify.breakpoint.width > 1000"> people</span></span>
      </v-btn>
      <v-btn depressed color="primary" @click="goToPublications">
        <span><v-icon>mdi mdi-bookshelf</v-icon><span v-if="$vuetify.breakpoint.width > 1000"> publications</span></span>
      </v-btn>
      <v-btn depressed color="primary" @click="goToProjects">
        <span><v-icon>mdi mdi-briefcase</v-icon><span v-if="$vuetify.breakpoint.width > 1000"> projects</span></span>
      </v-btn>
    </v-app-bar>
    <!-- footer mein space is 56px -->
    <v-footer color="teal lighten-5" :style="{top: $vuetify.breakpoint.width > 1000 ? 64 + 'px' : 56 + 'px'}" height="56px">
      <v-col style="font-weight: bold; font-size: large;" cols="12">
        {{ currentRouteName == "Home" ? "Welcome!" : currentRouteName }}
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
