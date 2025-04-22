<template>
  <h2
    :style="{ fontSize: element.properties.fontSize, color: element.properties.color, textAlign: element.properties.align, fontWeight: 'bold', margin: '0.5em 0' }">
    {{ element.properties.text }}
  </h2>
</template>

<script setup lang="ts">
import type { ElementData } from '@/stores/pageBuilderStore';
defineProps<{ element: ElementData }>();
</script>
