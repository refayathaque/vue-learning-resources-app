<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButton">Stored Resources</base-button>
    <!-- event attribute above "falls through" to the base-button's root `button` html element -->
    <base-button @click="setSelectedTab('add-resource')" :mode="addResButton">Add Resource</base-button>
  </base-card>
  <component :is="selectedTab"></component>
  <!-- use provide + inject to pass props to dynamic components -->
</template>

<script>
import StoredResources from './StoredResources.vue'
import AddResource from './AddResource.vue'

export default {
  components: {
    StoredResources,
    AddResource
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        { id: 'a', title: 'Official Guide', description: 'The official Vue.js documentation', link: 'https://vuejs.org' },
        { id: 'b', title: 'Google', description: 'Learn to Google', link: 'https://google.com' }
      ]
    }
  },
  computed: {
    storedResButton() {
      return this.selectedTab === 'stored-resources' ? null : 'flat'
    },
    addResButton() {
      return this.selectedTab === 'add-resources' ? null : 'flat'
    }
  },
  provide() {
    return {
      resources: this.storedResources
    }
  },
  methods : {
    setSelectedTab(tab) {
      this.selectedTab = tab
    }
  }
}
</script>

<style scoped>

</style>