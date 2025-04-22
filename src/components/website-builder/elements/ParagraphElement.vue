<template>
  <p
    :style="{ fontSize: element.properties.fontSize, color: element.properties.color, textAlign: element.properties.align, margin: '0.5em 0' }">
    {{ element.properties.text }}
  </p>
</template>

<script setup lang="ts">
import type { ElementData } from '@/stores/pageBuilderStore';
defineProps<{ element: ElementData }>();
</script>
