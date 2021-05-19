<template>
  <a-image
    :width="width"
    :height="height"
    :src="src"
    :fallback="fallback"
    :preview="preview"
  />
  <a-image-preview-group>
    <a-image 
      :width="width"
      :height="height"
      :src="src"
      :fallback="fallback"
      :preview="preview"
   />
  </a-image-preview-group>
  <!-- <a-space :size="12">
    <a-image
      :width="200"
      :src="`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`"
    >
      <template #placeholder>
        <a-image
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
          :width="200"
          :preview="false"
        />
      </template>
    </a-image>
    <a-button type="primary" @click="random = Date.now()">reload</a-button>
  </a-space> -->
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'

export interface previewType{
  visible?: boolean;
  onVisibleChange?: (visible: boolean, prevVisible: boolean)=>void;
  getContainer: string | HTMLElement | (()=> HTMLElement)
}

export default defineComponent({
  name: "ps-image",
  components: {},
  props: {
    alt: {
      type: String,
    },
    fallback: {
      type: String,
    },
    height: {
      type: String || Number,
    },
    placeholder: {
      type: Boolean,
    },
    preview: {
      type: Boolean || Object as PropType< previewType>,
      default: true
    },
    src: {
      type: String,
    },
    width: {
      type: String || Number,
    },
  },
  setup() {
    return {
      //random: ref(Date.now()),
    }
  }
})
</script>

<style scoped>

</style>>
