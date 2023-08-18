<template>
  <v-container class="mt-6">
    <div v-for="(briefing, idx) in briefings" :key="idx">
      <briefings-card :title="briefing.title" :text="briefing.text"></briefings-card>
    </div>
  </v-container>
</template>

<script>
import BriefingsCard from '../components/BriefingsCard'
import briefingsData from "../data/briefings/briefingsData.json"

export default {
  name: 'BriefingsView',
  components: {
    BriefingsCard,
  },
  data: () => ({
    briefings: briefingsData,
  }),
}
</script>
