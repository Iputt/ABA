<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{count}}</h1>
  <h1>{{double}}</h1>
  <p>{{error}}</p>
  <Suspense>
    <template #default>
      <!-- <async-show /> -->
      <dog-show />
    </template>
    <template #fallback>
      <h1>Loading......</h1>
    </template>
  </Suspense>
  <h1>X : {{x}} Y : {{y}}</h1>
  <h1 v-if="loading">Loading....</h1>
  <button @click="openModal">Open Modal</button>
  <!-- <img v-if="loaded" :src="result.message" /> -->
  <modal :isOpen="modalIsOpen" @close-modal="onModalClose" />
  <button @click="increase">+1</button>
</template>

<script lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, onErrorCaptured } from "vue";
import useMousePosition from "../hooks/useMousePosition";
import useURLLoader from "../hooks/useURLLoader";
import Modal from "./components/Modal.vue";
// import AsyncShow from './components/AsyncShow.vue'
import DogShow from './components/DogShow.vue'

interface DataProps {
  count: number;
  double: number;
  increase: () => void;
}
interface DogResult {
  message: string;
  status: string;
}

export default {
  components: {
    Modal,
    // AsyncShow,
    DogShow,
  },
  name: "App",
  setup() {
    const error = ref(null)
    onErrorCaptured((e: any) => {
      error.value = e
      return true
    })

    const count = ref(0);
    const double = computed(() => {
      return count.value * 2;
    });
    const increase = () => {
      count.value++;
    };
    //const greetings = ref('')
    // const updateGreeting = () =>{
    //   greetings.value += 'hello'
    // }
    // watch([greetings,count], (newValue,oldValue) => {
    //   console.log(newValue);
    //   console.log(oldValue)
    //   document.title = "up"
    // })

    const { x, y } = useMousePosition();
    const { result, loading, loaded } = useURLLoader<DogResult>(
      "https://dog.ceo/api/breeds/image/random"
    );
    watch(result, () => {
      if (result.value) {
        console.log("value", result.value.message);
      }
    });

    const modalIsOpen = ref(false);
    const openModal = () => {
      modalIsOpen.value = true;
    };
    const onModalClose = () => {
      modalIsOpen.value = false;
    };
    return {
      count,
      double,
      increase,
      x,
      y,
      result,
      loading,
      loaded,
      modalIsOpen,
      openModal,
      onModalClose,
      error
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
