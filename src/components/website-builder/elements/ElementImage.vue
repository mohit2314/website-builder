<template>
  <img :src="src" :alt="alt" :style="computedStyle" />
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: 'https://via.placeholder.com/600x300?text=Image'
  },
  alt: {
    type: String,
    default: 'Image'
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: 'auto'
  },
  borderRadius: {
    type: String,
    default: '4px'
  }
});

const props = defineProps([
  'src', 'alt', 'width', 'height', 'borderRadius'
]);

const computedStyle = {
  width: props.width,
  height: props.height,
  borderRadius: props.borderRadius,
  display: 'block',
  margin: '0.5em auto'
};
</script>
