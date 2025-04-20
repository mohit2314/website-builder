<template>
  <h2 :style="computedStyle">{{ text }}</h2>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: 'Sub-headline Text Goes Here'
  },
  fontSize: {
    type: String,
    default: '1.5rem'
  },
  color: {
    type: String,
    default: '#444'
  },
  align: {
    type: String,
    default: 'center'
  }
});

const props = defineProps([
  'text', 'fontSize', 'color', 'align'
]);

const computedStyle = {
  fontSize: props.fontSize,
  color: props.color,
  textAlign: props.align,
  fontWeight: 'bold',
  margin: '0.5em 0'
};
</script>
