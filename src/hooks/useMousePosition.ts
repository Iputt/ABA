/*
 * @Author: lfy
 * @Date: 2020-12-09 15:10:23
 * @LastEditTime: 2020-12-09 16:24:50
 * @LastEditors: Please set LastEditors
 * @Description: Get mouse position
 * @FilePath: \ABA\src\hooks\useMousePosition.ts
 */

import { ref, reactive, onMounted, onUnmounted, toRefs } from 'vue'

function useMousePosition() {
  //ref
  // const x = ref(0)
  // const y = ref(0)

  // const updateMouse = (e: MouseEvent) => {
  //   x.value = e.pageX;
  //   y.value = e.pageY;
  // }


  //reactive
  const obj = reactive({
    x: 0,
    y: 0
  })

  const updateMouse = (e: MouseEvent) => {
    obj.x = e.pageX
    obj.y = e.pageY
  }
  const obj2 = toRefs(obj)

  onMounted(() => {
    document.addEventListener("click", updateMouse)
  })

  onUnmounted(() => {
    document.removeEventListener("click", updateMouse)
  })

  return { ...obj2 }
}

export default useMousePosition