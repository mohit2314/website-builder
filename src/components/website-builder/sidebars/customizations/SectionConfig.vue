<template>
  <div class="section-config-panel">
    <h3>Section Settings</h3>
    <div class="form-group">
      <label class="form-label">Background Color</label>
      <input v-model="section.properties.backgroundColor" type="color" class="form-input" />
    </div>
    <div class="form-group">
      <label class="form-label">Padding</label>
      <div class="padding-inputs">
        <div>
          <label class="mini-label">Top</label>
          <input v-model="section.properties.paddingTop" type="number" min="0" class="form-input mini" />
        </div>
        <div>
          <label class="mini-label">Right</label>
          <input v-model="section.properties.paddingRight" type="number" min="0" class="form-input mini" />
        </div>
        <div>
          <label class="mini-label">Bottom</label>
          <input v-model="section.properties.paddingBottom" type="number" min="0" class="form-input mini" />
        </div>
        <div>
          <label class="mini-label">Left</label>
          <input v-model="section.properties.paddingLeft" type="number" min="0" class="form-input mini" />
        </div>
      </div>
      <small>All values in px</small>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePageBuilderStore } from '@/stores/pageBuilderStore';
import { storeToRefs } from 'pinia';

const pageBuilder = usePageBuilderStore();
const { sections, activeSectionId } = storeToRefs(pageBuilder);

const section = computed(() => {
  return sections.value.find(s => s.id === activeSectionId.value) || sections.value[0];
});
</script>


<style scoped>
.section-config-panel {
  padding: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.padding-inputs {
  display: flex;
  gap: 0.5rem;
}

.form-input.mini {
  width: 60px;
  padding: 0.2rem 0.4rem;
}

.mini-label {
  font-size: 0.8em;
  display: block;
  margin-bottom: 2px;
}

.form-label {
  font-weight: 600;
  margin-bottom: 0.25rem;
  display: block;
}

.form-input {
  width: 50px;
  padding: 0.4rem 0.6rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}
</style>
