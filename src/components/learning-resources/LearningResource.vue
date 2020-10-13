<template>
  <h3>{{ title }}</h3>
  <button>Delete</button>
  <p>{{ description }}</p>
  <a :href="link">View resource</a>
</template>

<script>
export default {
  props: [ 'title', 'description', 'link' ]
}
</script>