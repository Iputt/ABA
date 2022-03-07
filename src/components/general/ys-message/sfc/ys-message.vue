<template>
  <div v-show="show" ref="card" class="card info">
    <svg class="icon" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 1.895a18.107 18.107 0 1 0 18.107 18.107A18.128 18.128 0 0 0 20 1.895Zm0 32.639a14.532 14.532 0 1 1 14.532-14.532A14.548 14.548 0 0 1 20 34.534Z" fill="#222"/>
      <path d="M19.215 14.693a2.42 2.42 0 1 0 0-4.842 2.42 2.42 0 0 0 0 4.842ZM17.63 16.86a1.44 1.44 0 0 0 .252 2.856h.142v7.971h-.77a1.231 1.231 0 0 0-1.23 1.231 1.231 1.231 0 0 0 1.23 1.232h5.492a1.232 1.232 0 0 0 1.232-1.232 1.231 1.231 0 0 0-1.232-1.23h-.761V17.511a1.243 1.243 0 0 0-1.484-1.219c-1.242.246-2.821.559-2.87.567Z" fill="#222"/>
    </svg>
    <div class="content">
      <strong>提示信息</strong>
      <ul>
        <li>这是一条提示信息1</li>
        <li>这是一条提示信息2</li>
      </ul>
    </div>
    <svg class="back" xmlns="http://www.w3.org/2000/svg">
      <circle id="back-circle" :cx="backStyle.cx" :cy="backStyle.cy" :r="backStyle.r" :fill="backStyle.fill" :stroke="backStyle.stroke" :stroke-width="backStyle.width"></circle>
      <line id="back-line" :x1="backStyle.x1" :y1="backStyle.y1" :x2="backStyle.x2" :y2="backStyle.y2" :stroke="backStyle.stroke" :stroke-width="backStyle.width"></line>
    </svg>
  </div>
</template>

<script lang="ts" setup>

const enum Enum_MessageType {
  info,
  warning,
  error
}
interface IBackAttribute {
  cx: number;
  cy: number;
  r: number;
  fill: string;
  stroke: string;
  width: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

// expect props options
const props = defineProps({
  show: {
    type: Boolean,
    default: true
  }
});

watch(() => props.show, (val) => {
  val && updateBackSvg();
})

const card = ref(); //dom元素
const backStyle = ref<IBackAttribute>({} as IBackAttribute);

onMounted(() => {
  updateBackSvg();
})

const getRandomXPosition = () => {
  console.log(card.value)
  const width = card.value.scrollWidth
  const x = Math.floor(Math.random() * width)
  return x
}

const getRandomYPosition = () => {
  const height = card.value.offsetHeight
  const y = Math.floor(Math.random() * height)
  return y
}

const getRandomRadius = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

/**
 * 更新背景
 */
const updateBackSvg = () => {
  backStyle.value = {
    "cx": getRandomXPosition(),
    "cy": getRandomYPosition(),
    "r": getRandomRadius(50, 150),
    "fill": "rgba(255,255,255,0.5)",
    "stroke": "transparent",
    "width": "2",
    "x1": getRandomXPosition(),
    "y1": getRandomYPosition(),
    "x2": getRandomXPosition() + 200,
    "y2": getRandomYPosition() + 200,
  }
}

// const randomRgbaString = () => {
//   const randomColor = Math.floor(Math.random() * 255)
//   return colors[randomColor]
// }

// const randomStroke = () => {
//   // eslint-disable-next-line no-unreachable-loop
//   for (let x = 0; x < 30; x++) {
//     const stroke = randomRgbaString()
//     return stroke
//   }
// }


</script>

<style scoped lang="scss">
  .card {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    // position: relative;
    padding: 25px 40px;
    padding-left: 80px;
    margin: 10px 0;
    max-width: 850px;
    .content {
      position: relative;
      z-index: 1;
      strong {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 24px;
        font-weight: 500;
      }
      ul {
        margin: 1em 0;
      }
    }
    .icon {
      position: absolute;
      top: 25px;
      left: 20px;
    }
    .back {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      opacity: 0.5;
    }
  }
  .info {
    background: linear-gradient(to right, rgba(173,195,215,1) 0%, rgba(146,175,201,1) 100%);
  }
  .warning {
    background: linear-gradient(to right, rgba(253,210,175,1) 0%, rgba(251,188,136,1) 100%);
    .icon {
      fill: #C55D07;
    }
  }
  .error {
    background: linear-gradient(to right, rgba(243,170,165,1) 0%, rgba(238,137,129,1) 100%);
    .icon {
      fill: #B42318;
    }
  }

</style>>
