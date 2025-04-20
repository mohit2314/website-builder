<template>
  <div class="hl_page-creator--content">
    <SectionBlock v-for="section in sections" :key="section.id" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SectionBlock from './SectionBlock.vue';
import { usePageBuilderStore } from '@/stores/pageBuilderStore';
import { storeToRefs } from 'pinia';

const pageBuilder = usePageBuilderStore();
const { sections } = storeToRefs(pageBuilder);

const hovered = ref({
  section: null as number | null,
  row: null as number | null,
  column: null as number | null,
  element: null as number | null,
});
</script>
