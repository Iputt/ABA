<template>
  <div>
    <a-button type="primary" @click="showModal">Open Modal</a-button>
    <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>

  <div>
    <a-button type="primary" @click="showModal">Open Modal with async logic</a-button>
    <a-modal
      title="Title"
      v-model:visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
    >
      <p>{{ modalText }}</p>
    </a-modal>
  </div>

  <div>
    <a-button type="primary" @click="showModal">Open Modal with customized footer</a-button>
    <a-modal v-model:visible="visible" title="Title" @ok="handleOk">
      <template #footer>
        <a-button key="back" @click="handleCancel">Return</a-button>
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">Submit</a-button>
      </template>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>

   <div>
    <a-button @click="showConfirm">Confirm</a-button>
    <a-button type="dashed" @click="showDeleteConfirm">Delete</a-button>
    <a-button type="dashed" @click="showPropsConfirm">With extra props</a-button>
  </div>

  <div>
    <a-button type="primary" @click="showModal">Modal</a-button>
    <a-button @click="confirm">Confirm</a-button>
    <a-modal
      v-model:visible="visible"
      title="Modal"
      ok-text="确认"
      cancel-text="取消"
      @ok="hideModal"
    >
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
    </a-modal>
  </div>

  <div>
    <a-button @click="info">Info</a-button>
    <a-button @click="success">Success</a-button>
    <a-button @click="error">Error</a-button>
    <a-button @click="warning">Warning</a-button>
  </div>

  <div id="components-modal-demo-position">
    <a-button type="primary" @click="setModal1Visible(true)">
      Display a modal dialog at 20px to Top
    </a-button>
    <a-modal
      title="20px to Top"
      style="top: 20px"
      v-model:visible="modal1Visible"
      @ok="setModal1Visible(false)"
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </a-modal>
    <br />
    <br />
    <a-button type="primary" @click="modal2Visible = true">
      Vertically centered modal dialog
    </a-button>
    <a-modal
      v-model:visible="modal2Visible"
      title="Vertically centered modal dialog"
      centered
      @ok="modal2Visible = false"
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </a-modal>
  </div>

  <a-button @click="countDown">Open modal to close in 5s</a-button>
  <a-button @click="showConfirm">Confirm</a-button>
  <a-button @click="showConfirm">Confirm</a-button>

  <div>
    <a-button type="primary" @click="showModal">Open Modal with customized button props</a-button>
    <a-modal
      v-model:visible="visible"
      title="Basic Modal"
      :ok-button-props="{ disabled: true }"
      :cancel-button-props="{ disabled: true }"
      @ok="handleOk"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>

  <div>
    <a-button type="primary" @click="showModal">Open Modal of 1000px width</a-button>
    <a-modal v-model:visible="visible" width="1000px" title="Basic Modal" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>

  <div>
    <a-button type="primary" @click="showModal">Open Modal</a-button>
    <a-modal
      v-model:visible="visible"
      title="Basic Modal"
      @ok="handleOk"
      width="100%"
      wrapClassName="full-modal"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>

</template>

<script lang="ts">
import { defineComponent, ref, createVNode, h, PropType } from 'vue'
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { Modal } from 'ant-design-vue';

export default defineComponent({
  name: "ps-modal",
  components: {},
  props: {
    afterClose: {
      type: Function,
    },
    bodyStyle: {
      type: Object,
      default: () => {}
    },
    cancelText: {
      type: String,
      default: "Cancel"
    },
    centered: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: true
    },
    confirmLoading: {
      type: Boolean,
      default: false
    },
    destroyOnClose: {
      type: Boolean,
      default: false
    },
    footer: {
      type: String,
    },
    forceRender: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    maskStyle: {
      type: Object,
      default: () => {}
    },
    okText: {
      type: String,
      default: "OK"
    },
    okType: {
      type: String,
      default: "primary"
    },
    // okButtonProps: {
    //   type: Object as PropType<ButtonProps>
    // }
    // cancelButtonProps: {
    //   type: Object as PropType<ButtonProps>
    // }
    title: {
      type: String
    },
    visible: {
      type: Boolean,
      default: false
    },
    width: {
      type: String || Number,
      default: 520
    },
    wrapClassname: {
      type: String
    },
    zIndex: {
      type: Number,
      default: 1000
    },
    dialogStyle: {
      type: Object,
    },
    dialogClass: {
      type: String
    }
  },
  setup() {
    const visible = ref<boolean>(false);

    const showModal = () => {
      visible.value = true;
    };

    const handleOk = (e: MouseEvent) => {
      console.log(e);
      visible.value = false;
    };

    const modalText = ref<string>('Content of the modal');
    const confirmLoading = ref<boolean>(false);

    const handleOk = () => {
      modalText.value = 'The modal will be closed after two seconds';
      confirmLoading.value = true;
      setTimeout(() => {
        visible.value = false;
        confirmLoading.value = false;
      }, 2000);
    };

    const loading = ref<boolean>(false);

    const handleOk = () => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
        visible.value = false;
      }, 2000);
    };

    const handleCancel = () => {
      visible.value = false;
    };

    const showConfirm = () => {
      Modal.confirm({
        title: 'Do you Want to delete these items?',
        icon: createVNode(ExclamationCircleOutlined),
        content: createVNode('div', { style: 'color:red;' }, 'Some descriptions'),
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
        class: 'test',
      });
    };
    const showDeleteConfirm = () => {
      Modal.confirm({
        title: 'Are you sure delete this task?',
        icon: createVNode(ExclamationCircleOutlined),
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    };
    const showPropsConfirm = () => {
      Modal.confirm({
        title: 'Are you sure delete this task?',
        icon: createVNode(ExclamationCircleOutlined),
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        okButtonProps: {
          disabled: true,
        },
        cancelText: 'No',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    };
    const hideModal = () => {
      visible.value = false;
    };

    const confirm = () => {
      Modal.confirm({
        title: 'Confirm',
        icon: createVNode(ExclamationCircleOutlined),
        content: 'Bla bla ...',
        okText: '确认',
        cancelText: '取消',
      });
    };
    const info = () => {
      Modal.info({
        title: 'This is a notification message',
        content: h('div', {}, [
          h('p', 'some messages...some messages...'),
          h('p', 'some messages...some messages...'),
        ]),
        onOk() {
          console.log('ok');
        },
      });
    };
    const success = () => {
      Modal.success({
        title: 'This is a success message',
        content: h('div', {}, [
          h('p', 'some messages...some messages...'),
          h('p', 'some messages...some messages...'),
        ]),
      });
    };

    const error = () => {
      Modal.error({
        title: 'This is an error message',
        content: 'some messages...some messages...',
      });
    };

    const warning = () => {
      Modal.warning({
        title: 'This is a warning message',
        content: 'some messages...some messages...',
      });
    };

    const modal1Visible = ref<boolean>(false);
    const modal2Visible = ref<boolean>(false);

    const setModal1Visible = (visible: boolean) => {
      modal1Visible.value = visible;
    };

    const countDown = () => {
      let secondsToGo = 5;
      const modal = Modal.success({
        title: 'This is a notification message',
        content: `This modal will be destroyed after ${secondsToGo} second.`,
      });
      const interval = setInterval(() => {
        secondsToGo -= 1;
        modal.update({
          content: `This modal will be destroyed after ${secondsToGo} second.`,
        });
      }, 1000);
      setTimeout(() => {
        clearInterval(interval);
        modal.destroy();
      }, secondsToGo * 1000);
    };

    const showConfirm = () => {
      Modal.confirm({
        title: 'Do you want to delete these items?',
        icon: createVNode(ExclamationCircleOutlined),
        content: 'When clicked the OK button, this dialog will be closed after 1 second',
        onOk() {
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          }).catch(() => console.log('Oops errors!'));
        },
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onCancel() {},
      });
    };

    const showConfirm = () => {
      for (let i = 0; i < 3; i += 1) {
        setTimeout(() => {
          Modal.confirm({
            content: 'destroy all',
            icon: createVNode(ExclamationCircleOutlined),
            onOk() {
              return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
              }).catch(() => console.log('Oops errors!'));
            },
            cancelText: 'Click to destroy all',
            onCancel() {
              Modal.destroyAll();
            },
          });
        }, i * 500);
      }
    };

    return {
      visible,
      showModal,
      handleOk,
      modalText,
      confirmLoading,
      loading,
      handleCancel,
      showConfirm,
      showDeleteConfirm,
      showPropsConfirm,
      hideModal,
      confirm,
      info,
      success,
      error,
      warning,
      modal1Visible,
      modal2Visible,
      setModal1Visible,
      countDown,
    }
  }
})
</script>

<style scoped lang="scss">
.full-modal {
  .ant-modal {
    max-width: 100%;
    top: 0;
    padding-bottom: 0;
    margin: 0;
  }
  .ant-modal-content {
    display: flex;
    flex-direction: column;
    height: calc(100vh);
  }
  .ant-modal-body {
    flex: 1;
  }
}
</style>>
