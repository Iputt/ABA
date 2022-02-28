<template>
  <div ref="drag" class="drag">
    <div class="drag-icon-box">
      <!-- 采用的是 element-ui 的图标 -->
      <i class="el-icon-upload"></i> 
    </div>
    <div class="drag-message">
      <span class="drag-message-title">将文件拖动到此处，或</span>
      <label for="file" class="drag-message-label">
        <input
          class="drag-message-input"
          type="file"
          id="file"
          name="file"
          @change="handleFileChange"
        />
        <span class="drag-message-manual">点击上传</span>
      </label>
    </div>
  </div>
</template>

<script lang="ts" setup>
import api from '@/api';
import { defineProps, defineEmits, ref } from 'vue'

// expect props options
const props = defineProps({
  test: String
});

// expect emits options
const emit = defineEmits(['update']);

let fontSize = ref(14);
const drag = ref();
const file: any = ref(null);

const bindEvents = () => {
  //被拖动的对象进入目标容器
  drag.value.addEventListener('dragover', e => {
    e.preventDefault();
    drag.value.style.borderColor = 'red';
  })
  // 被拖动的对象离开目标容器
  drag.value.addEventListener('dragleave', e => {
    e.preventDefault()
    drag.value.style.borderColor = '#eee'
  })
  // 被拖动的对象进入目标容器，释放鼠标键
  drag.value.addEventListener('drop', e => {
    e.preventDefault()
    drag.value.style.borderColor = '#eee'
    const fileList = e.dataTransfer.files
    file.value = fileList[0]
    uploadFile()
  })

}

/**
 * 文件改变处理
 * @param e 事件
 */
const handleFileChange = (e: any) => {
  const file = e.target.files[0];
  if(!file) return;
  file.value = file;
  uploadFile();
}

/**
 * 上传文件
 */
const uploadFile = async () => {
  const form = new FormData();
  form.append('name', 'file');
  form.append('file', file.value);
  console.log('调用上传文件API')
  //const res = await api.uploadFile(form);
}

</script>

<style scoped lang="scss">
  // div {
  //   font-size: v-bind(fontSize);
  // }
.drag {
  width: 660px;
  height: 300px;
  border: 2px dashed;
  border-color: #a3a3a3;
  border-radius: 5px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .drag-icon-box {
    width: 100%;
    height: 60px;
    text-align: center;
    font-size: 50px;
    line-height: 60px;
    color: #606266;
  }
  .drag-message {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    .drag-message-title {
      font-size: 14px;
      color: #606266;
    }
    .drag-message-label {
      width: 120px;
      height: 50px;
      height: auto;
      position: relative;
      overflow: hidden;
      .drag-message-input {
        position: absolute;
        left: -100px;
        top: -100px;
        z-index: -1;
        display: none;
      }
      .drag-message-manual {
        font-size: 14px;
        color: #4b87ff;
        cursor: pointer;
      }
    }
  }
}
</style>>
