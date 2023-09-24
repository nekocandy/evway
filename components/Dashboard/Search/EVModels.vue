<script setup lang="ts">
const evModelInput = ref('')
const dataLoading = ref(false)
</script>

<template>
  <div>
    <div class="bg-[#1E1E1E]" flex flex-col gap-4 rounded-md px-4 py-4>
      <div flex items-center gap-2>
        <input v-model="evModelInput" flex-1 class="bg-[#2D2D2D] placeholder:(text-[#7E7E7E]) focus:outline-none" px-4 py-2 placeholder="Search EV Model Here">
        <div v-if="dataLoading" loader />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
