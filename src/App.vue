<template>
  <LearningResource v-for="resource in storedResources" :key="resource.id" :title="resource.title" :description="resource.description" :link="resource.link" />
</template>

<script>
import LearningResource from './components/learning-resources/LearningResource.vue'

export default {
  components: {
    LearningResource,
  },
  data() {
    return {
      storedResources: [
        { id: 'a', title: 'Official Guide', description: 'The official Vue.js documentation', link: 'https://vuejs.org' },
        { id: 'b', title: 'Google', description: 'Learn to Google', link: 'https://google.com' }
      ]
    }
  }
}
</script>