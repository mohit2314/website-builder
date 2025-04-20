<template>
  <div :class="['element-image', alignmentClass]">
    <img :src="imgSrc" :alt="element.properties.alt" :style="imgStyle" class="element-image__img" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ElementData } from '@/stores/pageBuilderStore';
const props = defineProps<{ element: ElementData }>();

const alignmentClass = computed(() => {
  switch (props.element.properties.align) {
    case 'center':
      return 'element-image--center';
    case 'right':
      return 'element-image--right';
    default:
      return 'element-image--left';
  }
});

const imgStyle = computed(() => ({
  width: props.element.properties.width || '100%',
  height: props.element.properties.height || 'auto',
  borderRadius: props.element.properties.borderRadius || '0',
  display: 'block',
  maxWidth: '100%',
}));

const imgSrc = computed(() => props.element.properties.src || 'https://placehold.co/600x400');
</script>

<style scoped lang="scss">
.element-image {
  width: 100%;
  margin-bottom: 12px;
  display: flex;

  &--center {
    justify-content: center;
  }

  &--right {
    justify-content: flex-end;
  }

  &--left {
    justify-content: flex-start;
  }
}

.element-image__img {
  box-shadow: 0 1px 6px rgba(30, 40, 90, 0.08);
  transition: box-shadow 0.2s;
  background: #fff;
  max-width: 100%;
  height: auto;
  display: block;
}
</style>
