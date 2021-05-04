<template>
  <a-button type="primary" @click="info">Display normal message</a-button>
  <a-button @click="success">Customized display duration</a-button>

  <div>
    <a-button @click="success">Success</a-button>
    <a-button @click="error">Error</a-button>
    <a-button @click="warning">Warning</a-button>
  </div>

  <a-button @click="success">Display a loading indicator</a-button>

  <a-button @click="success">Display a sequence of message</a-button>

  <a-button type="primary" @click="openMessage">Open the message box</a-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { message } from 'ant-design-vue';

const key = 'updatable';

export default defineComponent({
  name: "ps-message",
  components: {},
  props: {},
  setup() {
    const info = () => {
      message.info('This is a normal message');
    };
    const error = () => {
      message.error('This is an error message');
    };
    const warning = () => {
      message.warning('This is a warning message');
    };

    // const success = () => {
    //   const hide = message.loading('Action in progress..', 0);
    //   setTimeout(hide, 2500);
    // };

    const success = () => {
      message
        .loading('Action in progress..', 2.5)
        .then(
          () => message.success('Loading finished', 2.5),
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          () => {},
        )
        .then(() => message.info('Loading finished is finished', 2.5));
    };
    const openMessage = () => {
      message.loading({ content: 'Loading...', key });
      setTimeout(() => {
        message.success({ content: 'Loaded!', key, duration: 2 });
      }, 1000);
    };
    return {
      info,
      success,
      error,
      warning,
      openMessage
    }
  }
})
</script>

<style scoped>

</style>>
