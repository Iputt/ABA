<template>
  <a-carousel 
    :after-change="onChange"
    :dot-position="dotPosition"
    effect="fade"
    autoplay
    arrows 
    dots-class="slick-dots slick-thumb"
  >
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </a-carousel>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';

const baseUrl =
  'https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/';

export default defineComponent({
  name: "ps-carousel",
  components: {
    LeftCircleOutlined,
    RightCircleOutlined,
  },
  props: {
    afterChange: {
      type: Function,
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    beforeChange: {
      type: Function,
    },
    dotPosition: {
      type: String,
      default: "bottom"
    },
    dots: {
      type: Boolean,
      default: true
    },
    dotsClass: {
      type: String,
      default: "slick-dots"
    },
    easing: {
      type: String,
      default: "linear"
    },
    effect: {
      type: String,
      default: "scrollx"
    }
  },
  setup() {
    const onChange = (current: number) => {
      console.log(current);
    };
    const getImgUrl = (i: number) => {
      return `${baseUrl}abstract0${i + 1}.jpg`;
    };
    return {
      onChange,
      dotPosition: ref('top'),
      baseUrl,
      getImgUrl,
    }
  }
})
</script>

<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}

/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}

/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}

/* For demo */
.ant-carousel :deep(.slick-dots) {
  position: relative;
  height: auto;
}
.ant-carousel :deep(.slick-slide img) {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 80%;
}
.ant-carousel :deep(.slick-arrow) {
  display: none !important;
}
.ant-carousel :deep(.slick-thumb) {
  bottom: 0px;
}
.ant-carousel :deep(.slick-thumb li) {
  width: 60px;
  height: 45px;
}
.ant-carousel :deep(.slick-thumb li img) {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
}
.ant-carousel :deep .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}

/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>>
