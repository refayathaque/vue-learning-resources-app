<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButton">Stored Resources</base-button>
    <!-- event attribute above "falls through" to the base-button's root `button` html element -->
    <base-button @click="setSelectedTab('add-resource')" :mode="addResButton">Add Resource</base-button>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
  <!-- use provide + inject to provide child dynamic components with data from parent (akin to passing down props) -->
  <!-- use provide + inject to provide child dynamic components with methods to manipulate state in parent, e.g., for sending form data up to parent to do something -->
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
      return this.selectedTab === 'add-resource' ? null : 'flat'
    }
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource
    }
  },
  methods : {
    setSelectedTab(tab) {
      this.selectedTab = tab
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        url
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources'
    },
    removeResource(resourceId) {
      const resourceIndex = this.storedResources.findIndex(resource => resource.id === resourceId)
      this.storedResources.splice(resourceIndex, 1);
    }
  }
}
</script>

<style scoped>

</style>