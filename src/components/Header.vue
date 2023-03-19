<template>
  <div class="flex mb-4 justify-between">
    <div>
      <el-button circle type="primary" size="large" plain class="mr-2">
        <el-icon>
          <ArrowLeft />
        </el-icon>
      </el-button>
      VARJOTA 53
    </div>
    <div>
      <ElButton @click="message" type="primary" round class="bg-[#1eaae0]">
        <font-awesome-icon icon="fa-regular fa-floppy-disk" class="pr-2" />
        GUARDAR
      </ElButton>
      <ElButton @click="message" type="primary" round class="bg-[#1eaae0]">
        <font-awesome-icon icon="fa-regular fa-floppy-disk" class="pr-2" />
        GUARDAR E SAIR
      </ElButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'

const message = () => {
  ElMessage('this is a message.')
}
</script>

<style scoped></style>
