<template>
  <a-divider
    :dashed="dashed"
    :orientation="orientation"
    :type="type"
  >
    {{text}}
  </a-divider>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

const enum orientation{
  "left",
  "right",
  "center"
}
const enum type{
  "horizontal",
  "vertical"
}

export default defineComponent({
  name: "ps-divider",
  components: {},
  props: {
    text: {
      type: String
    },
    dashed: {
      type: Boolean,
      default: false
    },
    orientation: {
      type: Object as PropType<orientation>,
      default: orientation.center
    },
    type: {
      type: Object as PropType<type>,
      default: type.horizontal
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>

</style>>
