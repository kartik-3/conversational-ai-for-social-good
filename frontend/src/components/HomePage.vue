<template>
  <div>
    <v-footer v-if="currentRouteName == 'Home'" color="teal lighten-5" height="56px">
      <v-col style="font-weight: bold; font-size: large;" cols="12">
        <p class="red--text text--lighten-2"> Latest updates: The team recently presented at ACL 2023.</p>
      </v-col>
    </v-footer>
    <div class="mx-12 mt-6">
      <v-sheet color="grey lighten-5" rounded class="pt-3 pb-3" elevation="2">
        <v-row class="pt-1 pb-1 px-4">
          <v-col cols="3">
            <v-img :max-height="300" :max-width="250" :aspect-ratio="4 / 5"
              :src="`${publicPath}images/people/rohini_srihari.jpeg`" class="grey lighten-2">
            </v-img>
            <v-footer padless class="mt-2 grey lighten-3" max-width="250px">
              <v-col class="text-center">
                <strong><a href="https://www.acsu.buffalo.edu/~rohini/" style="text-decoration: none;">Rohini
                    Srihari</a></strong>
              </v-col>
            </v-footer>
          </v-col>
          <v-col>
            <div>
              <div class="black--text py-3">
                <span id="professorTitle">Professor and Associate Chair, </span> <span id="department"><a
                    href="https://engineering.buffalo.edu/computer-science-engineering.html">Department of Computer
                    Science
                    and Engineering</a></span>
                <br>
                <span id="university"><a href="https://www.buffalo.edu/">University at Buffalo, The State University of
                    New York</a></span>
                <br>
                <span id="officeAddress">Office Address: 338D Davis Hall, Buffalo, NY 14260</span>
                <br>
                <span id="phoneNumber">Phone: <a href="tel:+1-716-645-1602">+1 (716) 645-1602</a></span>
                <br>
                <span id="emailAddress">E-mail: <a href="mailto:rohini@buffalo.edu">rohini@buffalo.edu</a></span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-sheet>
      <v-alert v-if="$vuetify.breakpoint.width > 1000" class="mt-6 mb-0 text-h6" color="blue" dense text elevation="2">
        <span> <strong>Conversational AI for Social Good</strong></span>
      </v-alert>
      <v-alert v-else class="mt-6 text-body-2" color="blue" dense text elevation="2">
        <span> <strong>Conversational AI for Social Good</strong></span>
      </v-alert>
      <div class="text-justify">
        <br>
        <p>
          There has been much focus on generative language models (LLMs) including Chat GPT and its successors and
          competitors. LLMs however, are only one component of a complete conversational AI system, or chatbot. Building
          and deploying chatbots for use with real users in real environments must consider various aspects including:
        </p>
        <ul>
          <li>
            Trustworthiness: dealing with issues such as hallucinations, social norms
          </li>
          <li>
            Purposeful conversations: chatbots that can encourage critical thinking, debate, counsel, persuade
          </li>
          <li>
            Personalized chatbots: chatbots that take into account personal data, chatbots that can speak on behalf of
            users with disabilities
          </li>
          <li>
            Knowledge Grounded chatbots: chatbots that leverage extensive KBs (e.g. UMLS)
          </li>
          <li>
            Evaluation methodology
          </li>
        </ul>
        <p></p>
        <p>
          This in turn requires advances on multiple fronts including language understanding and generation, dialogue
          planning, selecting the best response from an ensemble of response generators, etc. Since conversational data
          sets are still relatively scarce, it may also be necessary to create data sets for use in developing new models.
          We will also discuss shifts in model training paradigms including active learning, sample efficient training
          etc.
        </p>
        <p>
          This work is partly supported through an NSF grant <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2214070&HistoricalAwards=false">Purposeful Conversational Agents based on Hierarchical
          Knowledge Graphs.</a>
        </p>

      </div>
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
            Persuasive Dialogue Systems: Argumentation and Human Characteristic Based Persuasive Conversational Agents for Social Good
          </span>
          <p>
            Conversational agents (CAs) like GPT-4 have rapidly evolved, showcasing impressive abilities in complex tasks. This progress has spurred debates on AI safety and prompted some researchers to call for cautious exploration. While these agents excel in tasks like coding and passing exams, they lack human-like qualities and struggle with nuanced tasks like persuasion. Traditional persuasion relies on logos, ethos, and pathos appeals, yet most research on persuasive dialogue systems (PDS) focuses on arguments, neglecting human elements. Domain-specific PDS research lacks variety and human-centric interactions, while the absence of well-annotated data impedes progress. This proposal seeks to create a framework for analyzing and generating persuasive conversations, incorporating human characteristics and argument graphs. The plan involves defining features, testing controllable models, constructing argument graphs, and refining response planning in open-domain PDS.
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <span class="font-weight-bold">
            Trustworthy, Socially Responsible, and Knowledge-Grounded Conversational AI
          </span>
          <p>
            Recent advancements in open-domain conversational agents have harnessed neural response generators and vast,
            diverse training data, with the Alexa Prize competition showcasing socialbots capable of extensive
            topic-spanning discussions. Despite their prowess, these systems remain confined to aimless chitchat, beset by
            artifacts of neural response generation that undermine their reliability and impact, prompting our focus on
            rectifying open-domain dialog system limitations. The research is structured around three core research
            questions: (1) ensuring dialogue system consistency encompassing history, emotion, and persona; (2) mitigating
            hallucinations in knowledge-grounded conversational systems via deep exploration, perturbation strategies, and
            query rewriting frameworks; (3) enhancing adherence to social norms through data audits and socially aware
            response generation. The thesis aims to enhance conversational agent coherence, reliability, and prosocial
            attributes to bolster user trust and enable meaningful societal applications.
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
            Knowledge Grounded Conversation
          </span>
          <p>
            How can we make sure conversational chatbots are faithful to the knowledge and set of facts that we define? In
            this project we try to tackle the problem of hallucination in large language models with a focus on
            conversational.
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
    publicPath: process.env.BASE_URL
  }),
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
}
</script>
