import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => {
    return { isCollapse: false }
  },

  actions: {
    changeCollapse() {
      this.isCollapse = !this.isCollapse
    }
  }
})
