<template>
  <div class="hello" @click="handleClick">
    HelloWorld
  </div>
</template>

<script lang="ts">
import { useStore, STOREMODULETAG } from '@/store';
import { computed, defineComponent, onMounted, ref } from 'vue';
import { useEmitter } from '@/event'

export default defineComponent({
  name: 'HelloWorld', 
  props: {
    msg: String,
  },
  setup(props){
    const emitter: any = useEmitter();
    const store: any = useStore();
    const authority: any = useStore(STOREMODULETAG.AUTHORITYSTORE)
    let count = ref(2);
    let status = computed(() => store.getters.getCurrentStatus)
    let canEdit = computed(() => authority.getters.getCanEdit)

    onMounted(() => {
      console.log("全局状态currentstatus：模块状态管理canedit：", status.value, canEdit.value)
    })

    const handleClick = () => {
      emitter.emit('getuseinfo', count.value)
    }
    return {
      handleClick
    }
  }
});
</script>

<style scoped>
</style>
