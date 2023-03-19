<template>
  <div class="common-layout">
    <ElContainer class="h-screen">
      <ElAside
        :style="{ width: store.isCollapse ? '64px' : '300px' }"
        style="background-color: #073e55"
        class="overflow-hidden"
      >
        <Aside :isCollapse="isCollapse" />
      </ElAside>
      <ElContainer>
        <ElHeader style="background-color: #033043" class="flex items-center justify-between">
          <Navbar />
        </ElHeader>
        <ElMain>
          <RouterView />
        </ElMain>
      </ElContainer>
    </ElContainer>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/store/global'
import { RouterView } from 'vue-router'
import Aside from './components/Aside.vue'
import Navbar from './components/Navbar.vue'

const store = useGlobalStore()

const isCollapse = false
</script>
