<template>
  <section class="add-row-sidebar">

    <div id="add-row" role="tabpanel" aria-labelledby="add-row-tab">
      <div>
        <h2>Add Row</h2>
        <div class="add-row-body add-row-sidebar__body">
          <div class="row-cards">
            <div class="row-card">
              <div class="icon">
                <i class="fas fa-columns"></i>
              </div>
              <h5>1 Column</h5>
            </div>
            <div class="row-card">
              <div class="icon">
                <i class="fas fa-columns"></i>
              </div>
              <h5>2 Column</h5>
            </div>
            <div class="row-card">
              <div class="icon">
                <i class="fas fa-columns"></i>
              </div>
              <h5>3 Column</h5>
            </div>
            <div class="row-card">
              <div class="icon">
                <i class="fas fa-columns"></i>
              </div>
              <h5>4 Column</h5>
            </div>
            <div class="row-card">
              <div class="icon">
                <i class="fas fa-columns"></i>
              </div>
              <h5>5 Column</h5>
            </div>
            <div class="row-card">
              <div class="icon">
                <i class="fas fa-columns"></i>
              </div>
              <h5>6 Column</h5>
            </div>
            <div class="row-card">
              <div class="icon">
                <i class="fas fa-columns"></i>
              </div>
              <h5>Left Sidebar</h5>
            </div>
            <div class="row-card">
              <div class="icon">
                <i class="fas fa-columns"></i>
              </div>
              <h5>Right Sidebar</h5>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.add-row-sidebar {
  &__body {
    padding: 15px 20px;
  }

  &__close {
    cursor: pointer;
    opacity: 1 !important;
  }
}
</style>