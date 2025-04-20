import { defineStore } from 'pinia'
import { type ElementData } from '@/stores/pageBuilderStore'
export const useCustomizationSidebarStore = defineStore('customizationSidebar', {
  state: () => ({
    isOpen: false as boolean,
    activeSidebar: '' as string,
    editingSectionId: '' as string,
    editingRowId: '' as string,
    editingColumnId: '' as string,
    customizingElement: null as ElementData | null,
  }),
  actions: {
    setEditingSectionId(id: string) {
      this.editingSectionId = id
    },
    setEditingRowId(id: string) {
      this.editingRowId = id
    },
    setEditingColumnId(id: string) {
      this.editingColumnId = id
    },
    openSidebar(name: string) {
      this.activeSidebar = name
      this.isOpen = true
    },
    closeSidebar() {
      // this.editingSectionId = ''
      // this.editingRowId = ''
      // this.editingColumnId = ''
      this.isOpen = false
    },
    setCustomizingElement(element: ElementData) {
      this.customizingElement = element;
    },
    clearCustomizingElement() {
      this.customizingElement = null;
    }
  }

})
