<template>
  <a-list item-layout="horizontal" :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        >
          <template #title>
            <a href="https://www.antdv.com/">{{ item.title }}</a>
          </template>
          <template #avatar>
            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>

  <h3 :style="{ margin: '16px 0' }">Small Size</h3>
  <a-list size="small" bordered :data-source="data1">
    <template #renderItem="{ item }">
      <a-list-item>{{ item }}</a-list-item>
    </template>
    <template #header>
      <div>Header</div>
    </template>
    <template #footer>
      <div>Footer</div>
    </template>
  </a-list>
  <h3 :style="{ marginBottom: '16px' }">Default Size</h3>
  <a-list bordered :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item>{{ item }}</a-list-item>
    </template>
    <template #header>
      <div>Header</div>
    </template>
    <template #footer>
      <div>Footer</div>
    </template>
  </a-list>
  <h3 :style="{ margin: '16px 0' }">Large Size</h3>
  <a-list size="large" bordered :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item>{{ item }}</a-list-item>
    </template>
    <template #header>
      <div>Header</div>
    </template>
    <template #footer>
      <div>Footer</div>
    </template>
  </a-list>

  <a-list
    class="demo-loadmore-list"
    :loading="loading"
    item-layout="horizontal"
    :data-source="dataList"
  >
    <template #loadMore>
      <div :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }">
        <a-spin v-if="loadingMore" />
        <a-button v-else @click="loadMore">loading more</a-button>
      </div>
    </template>
    <template #renderItem="{ item }">
      <a-list-item>
        <template #actions>
          <a>edit</a>
          <a>more</a>
        </template>
        <a-list-item-meta
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        >
          <template #title>
            <a href="https://www.antdv.com/">{{ item.name.last }}</a>
          </template>
          <template #avatar>
            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </template>
        </a-list-item-meta>
        <div>content</div>
      </a-list-item>
    </template>
  </a-list>
  <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
    <template #footer>
      <div>
        <b>ant design vue</b>
        footer part
      </div>
    </template>
    <template #renderItem="{ item }">
      <a-list-item key="item.title">
        <template #actions>
          <span v-for="{ type, text } in actions" :key="type">
            <component v-bind:is="type" style="margin-right: 8px" />
            {{ text }}
          </span>
        </template>
        <template #extra>
          <img
            width="272"
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        </template>
        <a-list-item-meta :description="item.description">
          <template #title>
            <a :href="item.href">{{ item.title }}</a>
          </template>
          <template #avatar><a-avatar :src="item.avatar" /></template>
        </a-list-item-meta>
        {{ item.content }}
      </a-list-item>
    </template>
  </a-list>

  <a-list :grid="{ gutter: 16, column: 4 }" :data-source="data2">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-card :title="item.title">Card content</a-card>
      </a-list-item>
    </template>
  </a-list>
  <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }" :data-source="data4">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-card :title="item.title">Card content</a-card>
      </a-list-item>
    </template>
  </a-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useLoadMore } from 'vue-request';
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons-vue';
interface DataItem {
  title: string;
}
const data: DataItem[] = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
interface DataItem1 {
  title: string;
}
const data2: DataItem1[] = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];
interface DataItem3 {
  title: string;
}
const data4: DataItem3[] = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];
const data1: string[] = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const getFakeData = () => `https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo`;

const listData: Record<string, string>[] = [];

for (let i = 0; i < 23; i++) {
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
  name: "ps-list",
  components: {
    StarOutlined,
    LikeOutlined,
    MessageOutlined,
  },
  props: {
    bordered: {
      type: Boolean,
      default: false
    },
    footer: {
      type: String
    }
  },
  setup() {
    const { dataList, loading, loadingMore, loadMore } = useLoadMore(getFakeData, {
      listKey: 'results',
    });
    const pagination = {
      onChange: (page: number) => {
        console.log(page);
      },
      pageSize: 3,
    };
    const actions: Record<string, string>[] = [
      { type: 'StarOutlined', text: '156' },
      { type: 'LikeOutlined', text: '156' },
      { type: 'MessageOutlined', text: '2' },
    ];
    return {
      data,
      data1,
      data2,
      data4,
      loading,
      loadingMore,
      dataList,
      loadMore,
      listData,
      pagination,
      actions,
    }
  }
})
</script>

<style scoped>

</style>>
