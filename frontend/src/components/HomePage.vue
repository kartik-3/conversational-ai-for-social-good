<template>
  <div>
    <v-footer v-if="currentRouteName != 'Home'" color="teal lighten-5" height="56px">
      <v-col style="font-weight: bold; font-size: large;" cols="12">
        <p class="red--text text--lighten-2"> Latest updates: The team recently presented at ACL 2023.</p>
      </v-col>
    </v-footer>
    <div class="mx-12">
      <v-alert v-if="$vuetify.breakpoint.width > 1000" class="my-6 text-h6" color="blue" dense text elevation="2">
        <span> <strong>Conversational AI for Social Good</strong></span>
      </v-alert>
      <v-alert v-else class="my-6 text-body-2" color="blue" dense text elevation="2">
        <span> <strong>Conversational AI for Social Good</strong></span>
      </v-alert>
      <p class="text-justify">
        <b>
          TBD
        </b>
        <br>
        Welcome to the Natural Language Processing Group at the State University of New York at Buffalo! We are a
        passionate, inclusive group of students and faculty, postdocs and research engineers, who work together on
        algorithms that allow computers to process, generate, and understand human languages. Our interests are very
        broad, including basic scientific research on computational linguistics, machine learning, practical applications
        of human language technology, and interdisciplinary work in computational social science and cognitive science.
        We also develop a wide variety of educational materials on NLP and many tools for the community to use, including
        the Stanza toolkit which processes text in over 60 human languages.
      </p>
      <v-divider class="my-5"></v-divider>
      <v-alert v-if="$vuetify.breakpoint.width > 1000" class="my-6 text-justify text-h6" color="blue" dense text
        elevation="2">
        <strong>Ongoing Projects</strong>
      </v-alert>
      <v-alert v-else class="my-6 text-body-2" color="blue" dense text elevation="2">
        <span> <strong>Ongoing Projects</strong></span>
      </v-alert>
      <v-row>
        <v-col cols="12" md="6">
          <span class="font-weight-bold">
            Sougata's research project
          </span>
          <p>
            TBD
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <span class="font-weight-bold">
            Souvik's research project
          </span>
          <p>
            TBD
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <span class="font-weight-bold">
            Enhancing Augmentative and Alternative Communication( AAC) for ALS users
          </span>
          <p>
            We are developing an AI-powered chatbot to revolutionize Augmentative and Alternative Communication (AAC) for
            patients with Amyotrophic Lateral Sclerosis (ALS). Leveraging the capabilities of state-of-the-art
            conversational AI models like BlenderBot and DialoGPT, we are finetuning them to generate multiple,
            contextually-relevant responses to user prompts, thereby offering a more personalized and dynamic
            communication experience. While the current iteration is text-based, we plan to evolve this system into a
            multimodal platform, incorporating additional communication mechanisms such as gesture recognition and
            eye-tracking. Our ultimate aim is to significantly enhance AAC users' communicative autonomy and overall life
            quality.
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <span class="font-weight-bold">
            Deception Awareness and Reselience Training (DART)
          </span>
          <p>
            The Deception Awareness and Resilience Training (DART) platform helps seniors recognize threats and protect
            themselves. A collaboration between researchers, game designers, and community organizations, DART is unique
            in tailoring its curriculum and using gamification to make training accessible and engaging for seniors. The
            team is currently developing multiple chatbots for the DART project. The first is a chatbot which could help
            users by answering their queries about the various modules within DART Learn. There is another chatbot which
            would help users reflect on their learning and experience with disinformation and misinformation. Both the
            chatbots are deterministic and developed using RASA framework, with plans to add a neural bot and speech
            recognition soon.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <span class="font-weight-bold">
            Knowledge Grounded QA
          </span>
          <p>
            Working on the ways that we can incorporate external knowledge in language models to have more reliable and factual conversational systems.
          </p>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',

  data: () => ({
  }),
}
</script>
