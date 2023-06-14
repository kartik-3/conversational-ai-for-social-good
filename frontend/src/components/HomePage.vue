<template>
  <div class="mx-12">
    <v-alert class="my-6 text-justify text-h5" color="blue" dense text elevation="2">
      <strong>The RK Srihari Research Group</strong>
    </v-alert>
    <p>
      <b>
        TBD
      </b>
      <br>
      Welcome to the Natural Language Processing Group at the State University of New York at Buffalo! We are a
      passionate,
      inclusive group of
      students and faculty, postdocs and research engineers, who work together on algorithms that allow computers to
      process, generate, and understand human languages. Our interests are very broad, including basic scientific research
      on computational linguistics, machine learning, practical applications of human language technology, and
      interdisciplinary work in computational social science and cognitive science. We also develop a wide variety of
      educational materials on NLP and many tools for the community to use, including the Stanza toolkit which processes
      text in over 60 human languages.
      <br>
      <br>
      The Stanford NLP Group is part of the Stanford AI Lab (SAIL), and we also have close associations with the Stanford
      Institute for Human-Centered Artificial Intelligence (HAI), the Center for Research on Foundation Models, Stanford
      Data Science, and CSLI. We include members of the Linguistics Department, the Computer Science Department, the
      Psychology Department, and the Graduate School of Education, among others.
    </p>
    <v-divider class="my-5"></v-divider>
    <v-alert class="my-6 text-justify text-h6" color="blue" dense text elevation="2">
      <strong>Research Areas</strong>
    </v-alert>
    <v-row>
      <v-col>
        <span class="font-weight-bold">
          Combating Disinformation: Detection and Attribution
        </span>
        <p>
          This effort is focused on using natural language processing and deep learning methods to first identify
          disinformation in news and social media, and more importantly, provide evidence that they reflect false or
          misleading information. A key initial step is to first identify phrases or sentences that represent key claims
          being made. Each of then is used to search a set of reputable news sources for either supporting or refuting
          evidence. The data sets span different topics, including political news and more recently, Covid related fake
          news. A paper describing the data set used in this research was presented and published at ACL 2019.
        </p>
      </v-col>
      <v-col>
        <span class="font-weight-bold">
          Conversational AI Systems (Chatbots)
        </span>
        <p>
          This is a recent effort, focusing on the development of chatbots that are able to leverage rich content in
          generating responses (similar to question answering systems) as well as reflect empathy in generating tone
          appropriate responses. During the Covid pandemic, people find themselves increasingly isolated, including
          patients in hospitals. Intelligent and empathetic chatbots can help alleviate some of the despondence due to
          isolation. These models leverage state-of-the-art language models (such as GPT2 and GPT3) along with
          innovative deep learning architectures. We are also exploring the use of knowledge graph embeddings for deeper
          reasoning.
        </p>
      </v-col>
      </v-row>
      <v-row>
      <v-col>
          <span class="font-weight-bold">
            Social Unrest Prediction
          </span>
          <p>
            One aspect of this research has focused on leveraging diverse global data sources (including locally sourced
            data, “big data” including sensor data) and predictive analytics to provide early warning of social and
            economic disruption in emerging economies. It involves several components, including text mining and
            classification, fusion of information sources to quantify the stress associated with various indicators, and
            finally, computational models for predicting disruption, that is specific to a place and time. This research
            is focused on using heterogeneous data sources to provide early warning of social and economic disruption in
            emerging economies.
          </p>
        </v-col>
        <v-col>
          <span class="font-weight-bold">
            Multilingual Text Mining
          </span>
          <p>
            My work on multilingual text mining, includes languages that are less commonly taught (LCTL). These languages
            are characterized by the lack of critical resources such as electronic dictionaries, annotated corpora (for
            training machine learning modules) and other rich resources used in English NLP such as WordNet. I have
            supervised PhD students in adapting resources from other languages to automatically generate critical tools
            and data resources. This work, which was published in COLING and the journal TALIP, discussed the use of
            transfer learning to project English semantic role labels (from PropBank) to an Urdu corpus.
          </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'HomePage',

  data: () => ({
  }),
}
</script>
