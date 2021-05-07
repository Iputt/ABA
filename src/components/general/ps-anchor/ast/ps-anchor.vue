<template>
  <a-anchor>
    <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
    <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />
    <a-anchor-link
      href="#components-anchor-demo-basic"
      title="Basic demo with Target"
      target="_blank"
    />
    <a-anchor-link href="#API" title="API">
      <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
      <a-anchor-link href="#Link-Props" title="Link Props" />
    </a-anchor-link>
  </a-anchor>
  <a-anchor :affix="false">
    <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
    <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />
    <a-anchor-link href="#API" title="API">
      <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
      <a-anchor-link href="#Link-Props" title="Link Props" />
    </a-anchor-link>
  </a-anchor>
  <a-anchor :affix="false" :getCurrentAnchor="getCurrentAnchor">
    <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
    <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />
    <a-anchor-link href="#API" title="API">
      <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
      <a-anchor-link href="#Link-Props" title="Link Props" />
    </a-anchor-link>
  </a-anchor>
   <a-anchor :affix="false" @click="handleClick">
    <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
    <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />
    <a-anchor-link href="#API" title="API">
      <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
      <a-anchor-link href="#Link-Props" title="Link Props" />
    </a-anchor-link>
  </a-anchor>
  <a-anchor :affix="false" @change="onChange">
    <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
    <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />
    <a-anchor-link href="#API" title="API">
      <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
      <a-anchor-link href="#Link-Props" title="Link Props" />
    </a-anchor-link>
  </a-anchor>
  <a-anchor :target-offset="targetOffset">
    <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
    <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />
    <a-anchor-link href="#API" title="API">
      <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
      <a-anchor-link href="#Link-Props" title="Link Props" />
    </a-anchor-link>
  </a-anchor>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  name: "ps-anchor",
  components: {},
  props: {
    affix: {
      type: Boolean,
      default: true
    },
    bounds: {
      type: Number,
      default: 5
    },
    offsetTop: {
      type: Number,
      default: 0
    },
    offsetBottom: {
      type: Number
    },
    showInkInFixed: {
      type: Boolean,
      default: false
    },
    wrapperClass: {
      type: String,
    },
    wrapperStyle: {
      type: Object,
    },
    /**
     * link props
     */
    href: {
      type: String,
    },
    title: {
      type: String,
    },
    target: {
      type: String,
    },
  },
  setup() {
    const handleClick = (e: Event, link: string) => {
      e.preventDefault();
      console.log(link);
    };
    const getCurrentAnchor = () => {
      return '#components-anchor-demo-static';
    };
    const onChange = (link: string) => {
      console.log('Anchor:OnChange', link);
    };
    const targetOffset = ref<number | undefined>(undefined);
    onMounted(() => {
      targetOffset.value = window.innerHeight / 2;
    });
    return {
      handleClick,
      getCurrentAnchor,
      onChange,
      targetOffset
    }
  }
})
</script>

<style scoped>

</style>>
