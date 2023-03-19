<template>
  <div class="flex items-center gap-2">
    <ElButton link @click="store.changeCollapse()">
      <el-icon color="#fff" size="25">
        <Expand />
      </el-icon>
    </ElButton>

    <ElBreadcrumb separator=">">
      <ElBreadcrumbItem :to="$route.path"> {{ $route.name }} </ElBreadcrumbItem>
      <ElBreadcrumbItem></ElBreadcrumbItem>
    </ElBreadcrumb>
  </div>
  <div class="flex gap-10 items-center">
    <ElButton class="bg-[#1eaae0]" type="primary" round :icon="Plus"> NOVA RESERVA </ElButton>
    <div class="flex gap-2">
      <ElButton link v-for="item in listItens">
        <div class="flex flex-col gap-1 items-center text-[10px] text-white font-normal">
          <font-awesome-icon class="text-lg" :icon="item.icon" />
          {{ item.name }}
        </div>
      </ElButton>
    </div>

    <ElDropdown>
      <div class="flex items-center gap-2 text-white">
        <ElAvatar circle>
          <img src="@/assets/avatar.jpg" />
        </ElAvatar>
        <span>Sofia Lima</span>
        <el-icon class="el-icon--right">
          <CaretBottom />
        </el-icon>
      </div>

      <template #dropdown>
        <ElDropdownMenu>
          <ElDropdownItem>Action 1</ElDropdownItem>
          <ElDropdownItem>Action 2</ElDropdownItem>
          <ElDropdownItem>Action 3</ElDropdownItem>
          <ElDropdownItem>Action 4</ElDropdownItem>
        </ElDropdownMenu>
      </template>
    </ElDropdown>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/store/global'
import { Plus } from '@element-plus/icons-vue'
const store = useGlobalStore()

const listItens = [
  {
    name: 'MAPA',
    icon: ['far', 'map']
  },
  {
    name: 'EMAILS & SMS',
    icon: ['far', 'paper-plane']
  },
  {
    name: 'TIMELINE',
    icon: ['far', 'rectangle-list']
  },
  {
    name: 'ASSISTENTE',
    icon: ['far', 'lightbulb']
  },
  {
    name: 'AJUDA',
    icon: ['far', 'circle-question']
  }
]

function uppercase(name: string) {
  const result = name.toUpperCase()
  return result
}
</script>

<style>
.el-breadcrumb__item:last-child .el-breadcrumb__inner,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
.el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
  font-weight: 400;
  color: white;
  cursor: text;
}

.el-breadcrumb__inner a,
.el-breadcrumb__inner.is-link {
  font-weight: 700;
  text-decoration: none;
  transition: var(--el-transition-color);
  color: white;
}
</style>
