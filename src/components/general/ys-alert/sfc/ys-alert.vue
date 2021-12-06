<template>
  <div v-show="visible">
    <div>{{message}}</div>    
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'

const enum infoType {
  success,
  info,
  warning,
  error
}

const { message } = defineProps({
  message: String
})

const visible = ref<boolean>(true);

</script>

<style scoped>

</style>>
