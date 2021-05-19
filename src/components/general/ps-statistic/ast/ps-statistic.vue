<template>
  <a-statistic 
    v-if="type == 'dight'"
    :title="title" 
    :value="value" 
    :prefix="prefix"
    :suffix="suffix"
    :precision="precision"
    :decimalSeparator="decimalSeparator"
    :groupSeparator="groupSeparator"
    :value-style="{ color: '#3f8600' }">
  </a-statistic>
  <a-statistic-countdown
    v-if="type == 'countdown'"
    :title="title"
    :value="value"
    :format="format"
    :prefix="prefix"
    :suffix="suffix"
    :valueStyle="valueStyle"
    @finish="onFinish"
  />
    
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "ps-statistic",
  components: {},
  props: {
    type:{
      type: String,
      default: "dight"
    },
    decimalSeparator: {
      type: String,
      default:"."
    },
    formatter: {
      type: String,
      default:"."
    },
    groupSeparator: {
      type: String,
      default:","
    },
    precision: {
      type: Number
    },
    prefix: {
      type: String,
    },
    suffix: {
      type: String,
    },
    title: {
      type: String,
    },
    value: {
      type: String || Number,
      default:"."
    },
    valueStyle: {
      type: String,
      default:"."
    },
    /**
     * countdown
     */
    format: {
      type: String,
      default:"HH:mm:ss"
    }
  },
  setup() {
    const onFinish = () => {
      console.log('finished!');
    };
    return {
      onFinish,
    }
  }
})
</script>

<style scoped>

</style>>
