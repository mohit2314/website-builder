import { defineStore } from 'pinia'

export const useCustomizationSidebarStore = defineStore('customizationSidebar', {
  state: () => ({
    isOpen: false as boolean,
    activeSidebar: '' as string
  }),
  actions: {
    openSidebar(name: string) {
      this.activeSidebar = name
      this.isOpen = true
    },
    closeSidebar() {
      this.isOpen = false
    },
    setActiveSidebar(name: string) {
      this.activeSidebar = name
    }
  }
})
