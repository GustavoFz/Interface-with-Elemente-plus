<template>
  <div class="pl-5 pr-14 py-10">
    <img src="@/assets/logo-ynoov.jpg" />
  </div>
  <ElScrollbar>
    <ElMenu
      class="bg-[#073e55] border-r-0 hover:border-l-4 hover:border-[#1eaae0]"
      :collapse="store.isCollapse"
      :default-active="$route.path"
      router
      v-for="item in dataMenuItens"
    >
      <ElSubMenu v-if="item.children" index="4" class="bg-[#073e55] hover:bg-[#033043]">
        <template #title>
          <ElIcon><component :is="item.icon" /></ElIcon>
          <span>{{ item.name }}</span>
        </template>
        <div v-for="subItem in item.children">
          <ElMenuItem
            :index="subItem.link"
            class="bg-[#073e55] hover:bg-[#033043] text-white hover:bg-[#033043]s"
          >
            <div class="m-3 pl-4 border-l-4 border-[#06506e]">
              {{ subItem.name }}
            </div>
          </ElMenuItem>
        </div>
      </ElSubMenu>

      <ElMenuItem v-else :index="item.link" class="text-white hover:bg-[#033043]">
        <ElIcon><component :is="item.icon" /></ElIcon>
        <span>{{ item.name }}</span>
      </ElMenuItem>
    </ElMenu>
  </ElScrollbar>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/store/global'

const store = useGlobalStore()

const dataMenuItens = [
  {
    name: 'PAINEL',
    icon: 'Odometer',
    link: '/dashboard'
  },

  {
    name: 'ALOJAMENTOS',
    icon: 'Menu',
    link: '/accommodation/detail'
  },
  {
    name: 'CALENDARIOS',
    icon: 'Calendar',
    link: '/calender'
  },
  {
    name: 'RESERVA',
    icon: 'ShoppingBag',
    children: [
      {
        name: 'Item',
        link: '/reservation'
      }
    ]
  },
  {
    name: 'TAREFAS',
    icon: 'List',
    children: [
      {
        name: 'Limpezas',
        link: '/task/cleaning'
      },
      {
        name: 'SEF',
        link: '/task/sef'
      },
      {
        name: 'Check-in Online',
        link: '/task/check-in-online'
      },
      {
        name: 'Check-in',
        link: '/task/check-in'
      },
      {
        name: 'Check-out',
        link: '/task/check-out'
      },
      {
        name: 'Manutencao',
        link: '/task/maintenance'
      }
    ]
  },
  {
    name: 'HOSPEDES',
    icon: 'User',
    link: '/guests'
  },
  {
    name: 'FATURACAO',
    icon: 'Tickets',
    children: [
      {
        name: 'Item',
        link: '/invoicing'
      }
    ]
  },
  {
    name: 'FINANCAS',
    icon: 'Wallet',
    link: '/finance'
  },
  {
    name: 'ESTATISTICAS',
    icon: 'Histogram',
    children: [
      {
        name: 'Item',
        link: '/statistic'
      }
    ]
  }
]
</script>
<style>
.el-menu-item,
.el-menu-item-group__title,
.el-sub-menu__title {
  color: white;
}
.el-sub-menu__title:hover {
  background-color: #033043;
}
</style>
