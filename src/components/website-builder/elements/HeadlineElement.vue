<template>
  <h1>{{ props.text }}</h1>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: 'Headline Text Goes Here'
  },
  // fontSize: {
  //   type: String,
  //   default: '2.5rem'
  // },
  // color: {
  //   type: String,
  //   default: '#222'
  // },
  // align: {
  //   type: String,
  //   default: 'center'
  // }
});


const computedStyle = {
  // fontSize: props.fontSize,
  // color: props.color,
  // textAlign: props.align,
  // fontWeight: 'bold',
  // margin: '0.5em 0'
};
</script>
