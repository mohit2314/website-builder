<template>
  <div class="hl_page-creator--element" :class="{ active: isHovered }" @mouseenter="isHovered = true"
    @mouseleave="isHovered = false">
    <div class="hl_page-creator--actions">
      <div class="more-actions">
        <span @click.stop="openCustomizationSidebar('manage-element')" data-tooltip="tooltip" data-placement="top"
          title="Customize"><i class="fas fa-cog"></i></span>
        <span data-tooltip="tooltip" data-placement="top" title="Clone"><i class="far fa-eye"></i></span>
        <span data-tooltip="tooltip" data-placement="top" title="Save"><i class="far fa-copy"></i></span>
        <span data-tooltip="tooltip" data-placement="top" title="Delete"><i class="far fa-trash-alt"></i></span>
      </div>
    </div>
    <span class="add-new-element" data-tooltip="tooltip" data-placement="bottom" title="Add New Element"><i
        class="icon icon-plus"></i></span>
    <div class="element-container">
      <component :is="currentElement" :element="element" />
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { ElementData } from '@/stores/pageBuilderStore';
import HeadlineElement from '@/components/website-builder/elements/HeadlineElement.vue';
import ImageElement from '@/components/website-builder/elements/ImageElement.vue';
import SubHeadlineElement from '@/components/website-builder/elements/SubHeadlineElement.vue';
import ParagraphElement from '@/components/website-builder/elements/ParagraphElement.vue';
import { useCustomizationSidebarStore } from '@/stores/customizationSidebar';
const props = defineProps<{ element: ElementData }>();

const customizationSidebar = useCustomizationSidebarStore();

const elementTypesMap = {
  'HeadlineElement': HeadlineElement,
  'ImageElement': ImageElement,
  'SubHeadlineElement': SubHeadlineElement,
  'ParagraphElement': ParagraphElement
}
const currentElement = computed(() => elementTypesMap[props.element.type])
const isHovered = ref(false);

function openCustomizationSidebar(type: string) {
  customizationSidebar.setCustomizingElement(props.element);
  customizationSidebar.openSidebar(type);
}

</script>
