<template>
  <ul :style="computedStyle">
    <li v-for="(item, idx) in items" :key="idx">{{ item }}</li>
  </ul>
</template>

<script setup lang="ts">
defineProps({
  items: {
    type: Array,
    default: () => [
      'Bullet item 1',
      'Bullet item 2',
      'Bullet item 3'
    ]
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
  'items', 'fontSize', 'color', 'align'
]);

const computedStyle = {
  fontSize: props.fontSize,
  color: props.color,
  textAlign: props.align,
  margin: '0.5em 0',
  paddingLeft: '1.2em'
};
</script>
