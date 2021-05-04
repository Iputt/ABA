<template>
  <a-button type="primary" @click="openNotification">Open the notification box</a-button>
  <a-button type="primary" @click="openNotification">Open the notification box</a-button>
  <div>
    <a-button @click="() => openNotificationWithIcon('success')">Success</a-button>
    <a-button @click="() => openNotificationWithIcon('info')">Info</a-button>
    <a-button @click="() => openNotificationWithIcon('warning')">Warning</a-button>
    <a-button @click="() => openNotificationWithIcon('error')">Error</a-button>
  </div>
  <a-button type="primary" @click="openNotification">Open the notification box</a-button>
  <a-button type="primary" @click="openNotification">Open the notification box</a-button>
  <a-button type="primary" @click="openNotification">Open the notification box</a-button>

  <div>
    <a-button type="primary" @click="openNotification('topLeft')">
      <radius-upleft-outlined />
      topLeft
    </a-button>
    <a-button type="primary" @click="openNotification('topRight')">
      <radius-upright-outlined />
      topRight
    </a-button>
    <a-divider />
    <a-button type="primary" @click="openNotification('bottomLeft')">
      <radius-bottomleft-outlined />
      bottomLeft
    </a-button>
    <a-button type="primary" @click="openNotification('bottomRight')">
      <radius-bottomright-outlined />
      bottomRight
    </a-button>
  </div>
  <a-button type="primary" @click="openNotification">Open the notification box</a-button>
</template>
</template>

<script lang="ts">
import { defineComponent, h } from 'vue'
import { notification, Button } from 'ant-design-vue';
import { SmileOutlined } from '@ant-design/icons-vue';
import {
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
} from '@ant-design/icons-vue';

const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.',
  );
};
const key = 'updatable';

export default defineComponent({
  name: "ps-notification",
  components: {
    RadiusUpleftOutlined,
    RadiusUprightOutlined,
    RadiusBottomleftOutlined,
    RadiusBottomrightOutlined,
  },
  props: {},
  setup() {
    const openNotification = () => {
      notification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    };
    const openNotification = () => {
      notification.open({
        message: 'Notification Title',
        description:
          'I will never close automatically. I will be close automatically. I will never close automatically.',
        duration: 0,
      });
    };
    const openNotificationWithIcon = (type: string) => {
      notification[type]({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      });
    };
    const openNotification = () => {
      notification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        icon: h(SmileOutlined, { style: 'color: #108ee9' }),
      });
    };
    const openNotification = () => {
      const key = `open${Date.now()}`;
      notification.open({
        message: 'Notification Title',
        description:
          'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
        btn: h(
          Button,
          {
            type: 'primary',
            size: 'small',
            onClick: () => notification.close(key),
          },
          'Confirm',
        ),
        key,
        onClose: close,
      });
    };
    const openNotification = () => {
      notification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        style: {
          width: '600px',
          marginLeft: `${335 - 600}px`,
        },
      });
    };
    const openNotification = (placement: string) => {
      notification.open({
        message: `Notification ${placement}`,
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        placement,
      });
    };
    const openNotification = () => {
      notification.open({
        key,
        message: 'Notification Title',
        description: 'description.',
      });
      setTimeout(() => {
        notification.open({
          key,
          message: 'New Title',
          description: 'New description.',
        });
      }, 1000);
    };

    return {
      openNotification,
      openNotificationWithIcon,
      
    }
  }
})
</script>

<style scoped>

</style>>
