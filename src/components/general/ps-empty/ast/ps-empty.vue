<template>
  <a-empty
    :image="image"
    :image-style="imageStyle"
    :description="description"
  >
  </a-empty>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "ps-empty",
  components: {},
  props: {
    image: {
      type: String,
    },
    imageStyle: {
      type: Object,
    },
    description: {
      type: String,
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>

</style>>
