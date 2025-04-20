<template>
  <p :style="computedStyle">{{ text }}</p>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: 'Paragraph text goes here.'
  },
  fontSize: {
    type: String,
    default: '1rem'
  },
  color: {
    type: String,
    default: '#555'
  },
  align: {
    type: String,
    default: 'left'
  }
});

const props = defineProps([
  'text', 'fontSize', 'color', 'align'
]);

const computedStyle = {
  fontSize: props.fontSize,
  color: props.color,
  textAlign: props.align,
  margin: '0.5em 0'
};
</script>
