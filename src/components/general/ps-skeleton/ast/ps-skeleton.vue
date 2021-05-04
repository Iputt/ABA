<template>
  <a-skeleton 
    :title="title"
    :loading="loading"
    :avatar="avatar" 
    :active="active"
    :paragraph="paragraph" 

  />
  <!-- <div class="article">
    <a-skeleton :loading="loading">
      <div>
        <h4>Ant Design Vue, a design language</h4>
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully
          and efficiently.
        </p>
      </div>
    </a-skeleton>
    <a-button :disabled="loading" @click="showSkeleton">Show Skeleton</a-button>
  </div> -->
  <!-- <div>
    <a-switch :checked="!loading" @change="onChange" />
    <a-list item-layout="vertical" size="large" :data-source="listData">
      <template #renderItem="{ item }">
        <a-list-item key="item.title">
          <template v-if="!loading" #actions>
            <span v-for="{ type, text } in actions" :key="type">
              <component v-bind:is="type" style="margin-right: 8px"></component>
              {{ text }}
            </span>
          </template>
          <template #extra>
            <img
              v-if="!loading"
              width="272"
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          </template>
          <a-skeleton :loading="loading" active avatar>
            <a-list-item-meta :description="item.description">
              <template #title>
                <a :href="item.href">{{ item.title }}</a>
              </template>
              <template #avatar><a-avatar :src="item.avatar" /></template>
            </a-list-item-meta>
            {{ item.content }}
          </a-skeleton>
        </a-list-item>
      </template>
    </a-list>
  </div> -->
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons-vue';

const enum skeletonSize{
  "large",
  "small",
  "default"
}

export interface SkeletonAvatarProps{
  size: number | skeletonSize;
  shape: "circle" | "square";
}

export interface SkeletonTitleProps{
  width: number | string;
}

export interface SkeletonParagraphProps{
  rows: number;
  width: number | string | Array<number | string> ;
}

interface DataItem {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
}

const listData: DataItem[] = [];
for (let i = 0; i < 3; i++) {
  listData.push({
    href: 'https://www.antdv.com/',
    title: `ant design vue part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

export default defineComponent({
  name: "ps-skeleton",
  components: {},
  props: {
    active: {
      type: Boolean,
      default: false
    },
    avatar: {
      type: Boolean || Object as PropType<SkeletonAvatarProps>,
      default: false
    },
    loading: {
      type: Boolean,
    },
    paragraph: {
      type: Boolean || Object as PropType<SkeletonParagraphProps>,
      default: true
    },
    title: {
      type: Boolean || Object as PropType<SkeletonTitleProps>,
      default: true
    }
  },
  setup() {
    const loading = ref<boolean>(false);

    const showSkeleton = () => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 3000);
    };

    const actions = [
      { type: 'star-outlined', text: '156' },
      { type: 'like-outlined', text: '156' },
      { type: 'message-outlined', text: '2' },
    ];

    const onChange = (checked: boolean) => {
      loading.value = !checked;
    };

    return {
      loading,
      showSkeleton,
      listData,
      actions,
      onChange,
    }
  }
})
</script>

<style scoped>
.article h4 {
  margin-bottom: 16px;
}
.article button {
  margin-top: 16px;
}
.skeleton-demo {
  border: 1px solid #f4f4f4;
}
</style>>
