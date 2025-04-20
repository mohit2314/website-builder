import { defineStore } from 'pinia'

export const useCustomizationSidebarStore = defineStore('customizationSidebar', {
  state: () => ({
    isOpen: false as boolean,
    activeSidebar: '' as string,
    selectedSectionId: '' as string
  }),
  actions: {
    setSelectedSectionId(sectionId: string) {
      this.selectedSectionId = sectionId;
    },
    openSidebar(name: string) {
      this.activeSidebar = name
      this.isOpen = true
    },
    closeSidebar() {
      this.selectedSectionId = '';
      this.isOpen = false
    },
    setActiveSidebar(name: string) {
      this.activeSidebar = name
    }
  }
})
